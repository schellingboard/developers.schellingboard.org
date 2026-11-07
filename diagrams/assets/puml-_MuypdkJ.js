var e=e=>{switch(e){case`index`:return`@startuml
title "L1 · System context"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Attendee>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<SiteAdmin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PushService>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Sb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, arranges 1-on-1s." <<Attendee>> as Attendee
person "==Site admin\\n\\nRuns the installation: site settings, guests, events." <<SiteAdmin>> as SiteAdmin
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==SchellingBoard\\n\\nUnconference scheduling: propose → vote → schedule." <<Sb>> as Sb
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp

Attendee .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>uses, installs on phone
SiteAdmin .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>administers installation
Sb .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
PushService .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>delivers push
Sb .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
@enduml
`;case`containers`:return`@startuml
title "L2 · Containers"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Attendee>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<SiteAdmin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PushService>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ReverseProxy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SbWeb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SbDb>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<SbFiles>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, arranges 1-on-1s." <<Attendee>> as Attendee
person "==Site admin\\n\\nRuns the installation: site settings, guests, events." <<SiteAdmin>> as SiteAdmin
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==Reverse proxy\\n\\nTerminates TLS. Not part of the app; documented for self-hosters." <<ReverseProxy>> as ReverseProxy
rectangle "SchellingBoard" <<Sb>> as Sb {
  skinparam RectangleBorderColor<<Sb>> #3b82f6
  skinparam RectangleFontColor<<Sb>> #3b82f6
  skinparam RectangleBorderStyle<<Sb>> dashed

  rectangle "==Web app\\n<size:10>[React, Vite, TypeScript, PWA]</size>\\n\\nStatic single-page app. Holds a per-event replica and renders every view from it." <<SbWeb>> as SbWeb
  rectangle "==Server\\n<size:10>[Node, Hono, TypeScript]</size>\\n\\nOne Node process: HTTP API, change feed, background jobs. Serves the web app as static files." <<SbServer>> as SbServer
  database "==SQLite database\\n<size:10>[SQLite, WAL mode]</size>\\n\\nState tables plus the append-only change log. One file to back up." <<SbDb>> as SbDb
  database "==File store\\n<size:10>[Directory on disk]</size>\\n\\nAvatars, location images and the venue map, re-encoded on upload." <<SbFiles>> as SbFiles
}
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp

Attendee .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>uses, installs on phone
SiteAdmin .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>administers installation
PushService .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>delivers push
ReverseProxy .[#8D8D8D,thickness=2].> SbServer : <color:#8D8D8D>forwards HTTPS
SbWeb .[#8D8D8D,thickness=2].> SbServer : <color:#8D8D8D>[...]
SbServer .[#8D8D8D,thickness=2].> SbDb : <color:#8D8D8D>reads and writes\\n<size:8>[<color:#8D8D8D>SQL via ports]</size>
SbServer .[#8D8D8D,thickness=2].> SbFiles : <color:#8D8D8D>stores uploads
SbServer .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
SbServer .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
@enduml
`;case`server`:return`@startuml
title "L3 · Server: infrastructure components and modules"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SbWeb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerJobs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMVenue>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMComments>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSettings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMUpdates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<SbDb>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<SbFiles>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SbServerMPeople>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMNotifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PushService>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SbServerMProposals>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSessions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMMeetings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerKernel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMEvents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Web app\\n<size:10>[React, Vite, TypeScript, PWA]</size>\\n\\nStatic single-page app. Holds a per-event replica and renders every view from it." <<SbWeb>> as SbWeb
rectangle "Server" <<SbServer>> as SbServer {
  skinparam RectangleBorderColor<<SbServer>> #3b82f6
  skinparam RectangleFontColor<<SbServer>> #3b82f6
  skinparam RectangleBorderStyle<<SbServer>> dashed

  rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Gates, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
  rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
  rectangle "==Jobs\\n\\nSingle leased loop: reactions to changes, deliveries (email, push), reminders, pruning. Idempotent." <<SbServerJobs>> as SbServerJobs
  rectangle "==venue\\n\\nLocations (rooms, areas), their images, colours and unavailable times." <<SbServerMVenue>> as SbServerMVenue
  rectangle "==comments\\n\\nComments on proposals, sessions and profiles, and their likes." <<SbServerMComments>> as SbServerMComments
  rectangle "==settings\\n\\nSite settings." <<SbServerMSettings>> as SbServerMSettings
  rectangle "==updates\\n\\nThe daily look-up of the latest release, shown to the admin." <<SbServerMUpdates>> as SbServerMUpdates
  rectangle "==people\\n\\nGuests, profiles, sign-in, passwords, login sessions, join links, the site-admin role." <<SbServerMPeople>> as SbServerMPeople
  rectangle "==notifications\\n\\nIn-app notifications and push subscriptions. Email and push delivery run in the jobs loop." <<SbServerMNotifications>> as SbServerMNotifications
  rectangle "==proposals\\n\\nProposals, hosts and votes." <<SbServerMProposals>> as SbServerMProposals
  rectangle "==sessions\\n\\nSessions, RSVPs, room unavailability, attendee counts." <<SbServerMSessions>> as SbServerMSessions
  rectangle "==meetings\\n\\n1-on-1 requests, availability, meeting points." <<SbServerMMeetings>> as SbServerMMeetings
  rectangle "==Kernel\\n\\nUnit of work, change log, actor, Result. The shared code every module may import." <<SbServerKernel>> as SbServerKernel
  rectangle "==events\\n\\nEvents, days, phases, time zone, per-event settings including the identity mode." <<SbServerMEvents>> as SbServerMEvents
}
database "==SQLite database\\n<size:10>[SQLite, WAL mode]</size>\\n\\nState tables plus the append-only change log. One file to back up." <<SbDb>> as SbDb
database "==File store\\n<size:10>[Directory on disk]</size>\\n\\nAvatars, location images and the venue map, re-encoded on upload." <<SbFiles>> as SbFiles
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService

SbWeb .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>commands and queries\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbWeb .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>snapshot, then changes since seq\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>signs in, resolves the actor
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>invokes use cases
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMSessions : <color:#8D8D8D>invokes use cases
SbServerFeed .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>reads change log
SbServerJobs .[#8D8D8D,thickness=2].> SbServerMNotifications : <color:#8D8D8D>runs reactions and deliveries
SbServerMSessions .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>records changes
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases and days
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMSessions : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMMeetings : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerJobs .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
SbServerJobs .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
SbServer .[#8D8D8D,thickness=2].> SbDb : <color:#8D8D8D>reads and writes\\n<size:8>[<color:#8D8D8D>SQL via ports]</size>
SbServer .[#8D8D8D,thickness=2].> SbFiles : <color:#8D8D8D>stores uploads
@enduml
`;case`modules`:return`@startuml
title "L3 · Server: modules"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SbServerMVenue>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMPeople>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMComments>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMNotifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMProposals>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSessions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMMeetings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMEvents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSettings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMUpdates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==venue\\n\\nLocations (rooms, areas), their images, colours and unavailable times." <<SbServerMVenue>> as SbServerMVenue
rectangle "==people\\n\\nGuests, profiles, sign-in, passwords, login sessions, join links, the site-admin role." <<SbServerMPeople>> as SbServerMPeople
rectangle "==comments\\n\\nComments on proposals, sessions and profiles, and their likes." <<SbServerMComments>> as SbServerMComments
rectangle "==notifications\\n\\nIn-app notifications and push subscriptions. Email and push delivery run in the jobs loop." <<SbServerMNotifications>> as SbServerMNotifications
rectangle "==proposals\\n\\nProposals, hosts and votes." <<SbServerMProposals>> as SbServerMProposals
rectangle "==sessions\\n\\nSessions, RSVPs, room unavailability, attendee counts." <<SbServerMSessions>> as SbServerMSessions
rectangle "==meetings\\n\\n1-on-1 requests, availability, meeting points." <<SbServerMMeetings>> as SbServerMMeetings
rectangle "==events\\n\\nEvents, days, phases, time zone, per-event settings including the identity mode." <<SbServerMEvents>> as SbServerMEvents
rectangle "==settings\\n\\nSite settings." <<SbServerMSettings>> as SbServerMSettings
rectangle "==updates\\n\\nThe daily look-up of the latest release, shown to the admin." <<SbServerMUpdates>> as SbServerMUpdates

SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases and days
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMSessions : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMMeetings : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
@enduml
`;case`web`:return`@startuml
title "L3 · Web app components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PushService>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SbWebPwa>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebCommands>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebShell>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebReplica>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "Web app" <<SbWeb>> as SbWeb {
  skinparam RectangleBorderColor<<SbWeb>> #3b82f6
  skinparam RectangleFontColor<<SbWeb>> #3b82f6
  skinparam RectangleBorderStyle<<SbWeb>> dashed

  rectangle "==PWA runtime\\n<size:10>[Service worker]</size>\\n\\nCached shell, push notifications, kiosk keep-awake." <<SbWebPwa>> as SbWebPwa
  rectangle "==Commands\\n\\nEvery mutation: predict with a domain policy, call the API, reconcile with the confirmed change." <<SbWebCommands>> as SbWebCommands
  rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
  rectangle "==Replica\\n\\nCopy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
  rectangle "==Feature views\\n\\nSchedule, proposals, voting, people, meetings, notifications, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures
}
rectangle "Server" <<SbServer>> as SbServer {
  skinparam RectangleBorderColor<<SbServer>> #3b82f6
  skinparam RectangleFontColor<<SbServer>> #3b82f6
  skinparam RectangleBorderStyle<<SbServer>> dashed

  rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Gates, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
  rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
}

PushService .[#8D8D8D,thickness=2].> SbWebPwa : <color:#8D8D8D>delivers push
SbWebShell .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>routes to
SbWebPwa .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>installs, delivers push
SbWebReplica .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>renders from
SbWebCommands .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>predicts, then reconciles
SbWebCommands .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>commands and queries\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbWebReplica .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>snapshot, then changes since seq\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
@enduml
`;case`flowRsvp`:return`@startuml
title "Flow · RSVP with optimistic update and live propagation"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Attendee>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebCommands>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebReplica>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSessions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerKernel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, arranges 1-on-1s." <<Attendee>> as Attendee
rectangle "==Feature views\\n\\nSchedule, proposals, voting, people, meetings, notifications, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures
rectangle "==Commands\\n\\nEvery mutation: predict with a domain policy, call the API, reconcile with the confirmed change." <<SbWebCommands>> as SbWebCommands
rectangle "==Replica\\n\\nCopy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Gates, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==sessions\\n\\nSessions, RSVPs, room unavailability, attendee counts." <<SbServerMSessions>> as SbServerMSessions
rectangle "==Kernel\\n\\nUnit of work, change log, actor, Result. The shared code every module may import." <<SbServerKernel>> as SbServerKernel
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed

Attendee .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>taps RSVP on a session
SbWebFeatures .[#8D8D8D,thickness=2].> SbWebCommands : <color:#8D8D8D>rsvp(sessionId)
SbWebCommands .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>apply predicted change (policy says allowed, capacity not exceeded)
SbWebCommands .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>PUT /sessions/{id}/rsvps/{guestId} (Idempotency-Key)\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMSessions : <color:#8D8D8D>rsvp use case: check phase and capacity, write, record change
SbServerMSessions .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>commit state + change in one transaction
SbServerKernel .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>publish change seq N
SbServerFeed .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>change seq N to every viewer of the event (this one matches it to the prediction by command_key)
SbServerHttp .[#8D8D8D,thickness=2].> SbWebCommands : <color:#8D8D8D>the result, with the recorded change
@enduml
`;case`flowSessionChanged`:return`@startuml
title "Flow · Site admin edits a session; attendees are told"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<SiteAdmin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMSessions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerKernel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerJobs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMNotifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Smtp>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PushService>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Site admin\\n\\nRuns the installation: site settings, guests, events." <<SiteAdmin>> as SiteAdmin
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Gates, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==sessions\\n\\nSessions, RSVPs, room unavailability, attendee counts." <<SbServerMSessions>> as SbServerMSessions
rectangle "==Kernel\\n\\nUnit of work, change log, actor, Result. The shared code every module may import." <<SbServerKernel>> as SbServerKernel
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
rectangle "==Jobs\\n\\nSingle leased loop: reactions to changes, deliveries (email, push), reminders, pruning. Idempotent." <<SbServerJobs>> as SbServerJobs
rectangle "==notifications\\n\\nIn-app notifications and push subscriptions. Email and push delivery run in the jobs loop." <<SbServerMNotifications>> as SbServerMNotifications
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService

SiteAdmin .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>PUT /sessions/{id}
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMSessions : <color:#8D8D8D>update use case: clash check
SbServerMSessions .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>record session.changed
SbServerKernel .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>publish to the event audience
SbServerJobs .[#8D8D8D,thickness=2].> SbServerMNotifications : <color:#8D8D8D>reaction: session.changed -> notifications for hosts and RSVP'd attendees
SbServerJobs .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>delivery: email
SbServerJobs .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>delivery: push
@enduml
`;case`flowJoin`:return`@startuml
title "Flow · First login through a personal join link"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Attendee>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebShell>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMPeople>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebReplica>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, arranges 1-on-1s." <<Attendee>> as Attendee
rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Gates, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==people\\n\\nGuests, profiles, sign-in, passwords, login sessions, join links, the site-admin role." <<SbServerMPeople>> as SbServerMPeople
rectangle "==Replica\\n\\nCopy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed

Attendee .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>opens /join/{token} from email
SbWebShell .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>POST /auth/join {token}
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>validate token, create a verified login session
SbServerHttp .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>Set-Cookie (httpOnly, SameSite=Lax) + actor context
SbWebShell .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>load event
SbWebReplica .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>GET snapshot, then subscribe since seq\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
@enduml
`;case`flowReconnect`:return`@startuml
title "Flow · Back online after a wifi drop"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SbWebPwa>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebShell>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebReplica>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerFeed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbWebFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==PWA runtime\\n<size:10>[Service worker]</size>\\n\\nCached shell, push notifications, kiosk keep-awake." <<SbWebPwa>> as SbWebPwa
rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
rectangle "==Replica\\n\\nCopy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
rectangle "==Feature views\\n\\nSchedule, proposals, voting, people, meetings, notifications, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures

SbWebPwa .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>app opened offline: shell from precache
SbWebShell .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>load persisted replica (seq 4120), show 'last synced 14:02'
SbWebReplica .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>GET feed?since=4120\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
SbServerFeed .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>changes 4121..4187, or a reset message if pruned → full snapshot
SbWebReplica .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>re-render, banner disappears
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};