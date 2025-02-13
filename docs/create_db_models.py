# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class CrewMember(Base):
    """description: Table representing the crew members aboard a starship."""
    __tablename__ = 'crew_member'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    rank = Column(String)
    position = Column(String)

class Starship(Base):
    """description: Table for starships available for planning the holiday."""
    __tablename__ = 'starship'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    class_type = Column(String)
    capacity = Column(Integer)

class Destination(Base):
    """description: Landing and travel destination for starship tours."""
    __tablename__ = 'destination'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    sector = Column(String)
    description = Column(String)

class Mission(Base):
    """description: Holiday missions or events planned during the star trek themed holiday."""
    __tablename__ = 'mission'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)
    description = Column(String)

class Reservation(Base):
    """description: Reservations for a starship to a destination."""
    __tablename__ = 'reservation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    crew_member_id = Column(Integer, ForeignKey('crew_member.id'), nullable=False)
    starship_id = Column(Integer, ForeignKey('starship.id'), nullable=False)
    destination_id = Column(Integer, ForeignKey('destination.id'), nullable=False)
    mission_id = Column(Integer, ForeignKey('mission.id'), nullable=False)
    date = Column(DateTime, nullable=False)

class Transmission(Base):
    """description: Table recording important mission communications."""
    __tablename__ = 'transmission'

    id = Column(Integer, primary_key=True, autoincrement=True)
    mission_id = Column(Integer, ForeignKey('mission.id'), nullable=False)
    content = Column(String, nullable=False)
    timestamp = Column(DateTime, nullable=False)

class LogEntry(Base):
    """description: Log entries by crew members recording observations and events."""
    __tablename__ = 'log_entry'

    id = Column(Integer, primary_key=True, autoincrement=True)
    crew_member_id = Column(Integer, ForeignKey('crew_member.id'), nullable=False)
    mission_id = Column(Integer, ForeignKey('mission.id'), nullable=False)
    entry_date = Column(DateTime, nullable=False)
    content = Column(String, nullable=False)

class Equipment(Base):
    """description: Equipment available for missions."""
    __tablename__ = 'equipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    starship_id = Column(Integer, ForeignKey('starship.id'), nullable=False)
    quantity = Column(Integer, default=1)

class Supply(Base):
    """description: Supplies needed for a mission to function smoothly."""
    __tablename__ = 'supply'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    mission_id = Column(Integer, ForeignKey('mission.id'), nullable=False)
    quantity = Column(Integer, default=1)

class Badge(Base):
    """description: Badges awarded to crew members for achievements."""
    __tablename__ = 'badge'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)

class CrewBadge(Base):
    """description: Association table linking crew members with badges earned."""
    __tablename__ = 'crew_badge'

    id = Column(Integer, primary_key=True, autoincrement=True)
    crew_member_id = Column(Integer, ForeignKey('crew_member.id'), nullable=False)
    badge_id = Column(Integer, ForeignKey('badge.id'), nullable=False)
    date_awarded = Column(DateTime, nullable=False)

class HolodeckReservation(Base):
    """description: Reservations for the use of the ship's holodeck for training or leisure."""
    __tablename__ = 'holodeck_reservation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    crew_member_id = Column(Integer, ForeignKey('crew_member.id'), nullable=False)
    reserved_from = Column(DateTime, nullable=False)
    reserved_to = Column(DateTime, nullable=False)
    purpose = Column(String)


# SQLAlchemy session initialization
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample data population
crew1 = CrewMember(name="James T. Kirk", rank="Captain", position="Commanding Officer")
crew2 = CrewMember(name="Spock", rank="Commander", position="Science Officer")
crew3 = CrewMember(name="Leonard McCoy", rank="Doctor", position="Chief Medical Officer")
crew4 = CrewMember(name="Montgomery Scott", rank="Lt. Commander", position="Chief Engineer")

starship1 = Starship(name="USS Enterprise", class_type="Constitution", capacity=430)
starship2 = Starship(name="USS Voyager", class_type="Intrepid", capacity=150)

destination1 = Destination(name="Risa", sector="Alpha Quadrant", description="Pleasure planet")
destination2 = Destination(name="Qo'noS", sector="Beta Quadrant", description="Homeworld of the Klingons")

mission1 = Mission(name="Shore Leave on Risa", start_date=datetime.datetime(2267, 7, 15), description="Relaxing vacation on the pleasure planet.")
mission2 = Mission(name="Diplomatic Mission to Qo'noS", start_date=datetime.datetime(2268, 3, 9), description="Peace talks with the Klingon Empire.")

reservation1 = Reservation(crew_member_id=1, starship_id=1, destination_id=1, mission_id=1, date=datetime.datetime(2267, 7, 10))
reservation2 = Reservation(crew_member_id=2, starship_id=1, destination_id=2, mission_id=2, date=datetime.datetime(2268, 3, 5))

transmission1 = Transmission(mission_id=1, content="All crew, prepare for shore leave.", timestamp=datetime.datetime(2267, 7, 14))
transmission2 = Transmission(mission_id=2, content="Entering orbit of Qo'noS.", timestamp=datetime.datetime(2268, 3, 8))

log_entry1 = LogEntry(crew_member_id=1, mission_id=1, entry_date=datetime.datetime(2267, 7, 15), content="Mission started successfully.")
log_entry2 = LogEntry(crew_member_id=3, mission_id=2, entry_date=datetime.datetime(2268, 3, 9), content="Initializing diplomatic protocols.")

equipment1 = Equipment(name="Tricorder", starship_id=1, quantity=20)
equipment2 = Equipment(name="Phaser", starship_id=1, quantity=50)

supply1 = Supply(name="Med Kits", mission_id=1, quantity=10)
supply2 = Supply(name="Rations", mission_id=1, quantity=200)

badge1 = Badge(name="Kobayashi Maru", description="For showing exceptional leadership")
badge2 = Badge(name="Science Excellence", description="For outstanding performance in sciences")

crew_badge1 = CrewBadge(crew_member_id=1, badge_id=1, date_awarded=datetime.datetime(2267, 6, 25))
crew_badge2 = CrewBadge(crew_member_id=2, badge_id=2, date_awarded=datetime.datetime(2267, 8, 1))

holodeck_reservation1 = HolodeckReservation(crew_member_id=4, reserved_from=datetime.datetime(2267, 7, 20, 14, 0), reserved_to=datetime.datetime(2267, 7, 20, 16, 0), purpose="Simulation Training")
holodeck_reservation2 = HolodeckReservation(crew_member_id=1, reserved_from=datetime.datetime(2267, 7, 22, 10, 0), reserved_to=datetime.datetime(2267, 7, 22, 12, 0), purpose="Relaxation")

# Add all to session and commit
session.add_all([crew1, crew2, crew3, crew4, starship1, starship2, destination1, destination2, 
                 mission1, mission2, reservation1, reservation2, transmission1, transmission2, 
                 log_entry1, log_entry2, equipment1, equipment2, supply1, supply2, 
                 badge1, badge2, crew_badge1, crew_badge2, holodeck_reservation1, holodeck_reservation2])
session.commit()
