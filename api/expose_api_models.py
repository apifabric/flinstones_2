from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Badge, method_decorators= method_decorators)
    api.expose_object(database.models.CrewBadge, method_decorators= method_decorators)
    api.expose_object(database.models.CrewMember, method_decorators= method_decorators)
    api.expose_object(database.models.Destination, method_decorators= method_decorators)
    api.expose_object(database.models.Equipment, method_decorators= method_decorators)
    api.expose_object(database.models.Starship, method_decorators= method_decorators)
    api.expose_object(database.models.HolodeckReservation, method_decorators= method_decorators)
    api.expose_object(database.models.LogEntry, method_decorators= method_decorators)
    api.expose_object(database.models.Mission, method_decorators= method_decorators)
    api.expose_object(database.models.Reservation, method_decorators= method_decorators)
    api.expose_object(database.models.Supply, method_decorators= method_decorators)
    api.expose_object(database.models.Transmission, method_decorators= method_decorators)
    return api
