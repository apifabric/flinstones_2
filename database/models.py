# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 29, 2024 11:28:42
# Database: sqlite:////tmp/tmp.jUtqQxVlMR/flinstones_2/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Badge(SAFRSBaseX, Base):
    """
    description: Badges awarded to crew members for achievements.
    """
    __tablename__ = 'badge'
    _s_collection_name = 'Badge'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CrewBadgeList : Mapped[List["CrewBadge"]] = relationship(back_populates="badge")



class CrewMember(SAFRSBaseX, Base):
    """
    description: Table representing the crew members aboard a starship.
    """
    __tablename__ = 'crew_member'
    _s_collection_name = 'CrewMember'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    rank = Column(String)
    position = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CrewBadgeList : Mapped[List["CrewBadge"]] = relationship(back_populates="crew_member")
    HolodeckReservationList : Mapped[List["HolodeckReservation"]] = relationship(back_populates="crew_member")
    LogEntryList : Mapped[List["LogEntry"]] = relationship(back_populates="crew_member")
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="crew_member")



class Destination(SAFRSBaseX, Base):
    """
    description: Landing and travel destination for starship tours.
    """
    __tablename__ = 'destination'
    _s_collection_name = 'Destination'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    sector = Column(String)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="destination")



class Mission(SAFRSBaseX, Base):
    """
    description: Holiday missions or events planned during the star trek themed holiday.
    """
    __tablename__ = 'mission'
    _s_collection_name = 'Mission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    LogEntryList : Mapped[List["LogEntry"]] = relationship(back_populates="mission")
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="mission")
    SupplyList : Mapped[List["Supply"]] = relationship(back_populates="mission")
    TransmissionList : Mapped[List["Transmission"]] = relationship(back_populates="mission")



class Starship(SAFRSBaseX, Base):
    """
    description: Table for starships available for planning the holiday.
    """
    __tablename__ = 'starship'
    _s_collection_name = 'Starship'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    class_type = Column(String)
    capacity = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    EquipmentList : Mapped[List["Equipment"]] = relationship(back_populates="starship")
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="starship")



class CrewBadge(SAFRSBaseX, Base):
    """
    description: Association table linking crew members with badges earned.
    """
    __tablename__ = 'crew_badge'
    _s_collection_name = 'CrewBadge'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    crew_member_id = Column(ForeignKey('crew_member.id'), nullable=False)
    badge_id = Column(ForeignKey('badge.id'), nullable=False)
    date_awarded = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    badge : Mapped["Badge"] = relationship(back_populates=("CrewBadgeList"))
    crew_member : Mapped["CrewMember"] = relationship(back_populates=("CrewBadgeList"))

    # child relationships (access children)



class Equipment(SAFRSBaseX, Base):
    """
    description: Equipment available for missions.
    """
    __tablename__ = 'equipment'
    _s_collection_name = 'Equipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    starship_id = Column(ForeignKey('starship.id'), nullable=False)
    quantity = Column(Integer)

    # parent relationships (access parent)
    starship : Mapped["Starship"] = relationship(back_populates=("EquipmentList"))

    # child relationships (access children)



class HolodeckReservation(SAFRSBaseX, Base):
    """
    description: Reservations for the use of the ship's holodeck for training or leisure.
    """
    __tablename__ = 'holodeck_reservation'
    _s_collection_name = 'HolodeckReservation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    crew_member_id = Column(ForeignKey('crew_member.id'), nullable=False)
    reserved_from = Column(DateTime, nullable=False)
    reserved_to = Column(DateTime, nullable=False)
    purpose = Column(String)

    # parent relationships (access parent)
    crew_member : Mapped["CrewMember"] = relationship(back_populates=("HolodeckReservationList"))

    # child relationships (access children)



class LogEntry(SAFRSBaseX, Base):
    """
    description: Log entries by crew members recording observations and events.
    """
    __tablename__ = 'log_entry'
    _s_collection_name = 'LogEntry'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    crew_member_id = Column(ForeignKey('crew_member.id'), nullable=False)
    mission_id = Column(ForeignKey('mission.id'), nullable=False)
    entry_date = Column(DateTime, nullable=False)
    content = Column(String, nullable=False)

    # parent relationships (access parent)
    crew_member : Mapped["CrewMember"] = relationship(back_populates=("LogEntryList"))
    mission : Mapped["Mission"] = relationship(back_populates=("LogEntryList"))

    # child relationships (access children)



class Reservation(SAFRSBaseX, Base):
    """
    description: Reservations for a starship to a destination.
    """
    __tablename__ = 'reservation'
    _s_collection_name = 'Reservation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    crew_member_id = Column(ForeignKey('crew_member.id'), nullable=False)
    starship_id = Column(ForeignKey('starship.id'), nullable=False)
    destination_id = Column(ForeignKey('destination.id'), nullable=False)
    mission_id = Column(ForeignKey('mission.id'), nullable=False)
    date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    crew_member : Mapped["CrewMember"] = relationship(back_populates=("ReservationList"))
    destination : Mapped["Destination"] = relationship(back_populates=("ReservationList"))
    mission : Mapped["Mission"] = relationship(back_populates=("ReservationList"))
    starship : Mapped["Starship"] = relationship(back_populates=("ReservationList"))

    # child relationships (access children)



class Supply(SAFRSBaseX, Base):
    """
    description: Supplies needed for a mission to function smoothly.
    """
    __tablename__ = 'supply'
    _s_collection_name = 'Supply'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    mission_id = Column(ForeignKey('mission.id'), nullable=False)
    quantity = Column(Integer)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("SupplyList"))

    # child relationships (access children)



class Transmission(SAFRSBaseX, Base):
    """
    description: Table recording important mission communications.
    """
    __tablename__ = 'transmission'
    _s_collection_name = 'Transmission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    mission_id = Column(ForeignKey('mission.id'), nullable=False)
    content = Column(String, nullable=False)
    timestamp = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("TransmissionList"))

    # child relationships (access children)
