import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id']);
    }
}