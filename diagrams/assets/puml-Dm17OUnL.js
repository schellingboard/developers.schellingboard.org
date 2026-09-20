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
skinparam person<<Organizer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<SiteAdmin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Bot>>{
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
skinparam rectangle<<ChatPlatform>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, keeps a personal agenda, arranges 1-on-1s." <<Attendee>> as Attendee
person "==Organizer\\n\\nConfigures an event: days, places, phases, booking rules, fixtures. Moderates. A role on a person, not a separate login." <<Organizer>> as Organizer
person "==Site admin\\n\\nRuns the installation: site settings, people, events, API tokens." <<SiteAdmin>> as SiteAdmin
person "==Bot / integration\\n\\nA script or chat bot holding an API token. Same API, same rules as a person." <<Bot>> as Bot
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==SchellingBoard\\n\\nUnconference scheduling: propose → vote → schedule, with a live personal agenda." <<Sb>> as Sb
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Chat platform\\n\\nTelegram, Matrix or Signal — reached through a channel adapter." <<ChatPlatform>> as ChatPlatform

Attendee .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>uses, installs on phone
Organizer .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>configures event, moderates
SiteAdmin .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>administers installation
Bot .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>calls with API token\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
Sb .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
PushService .[#8D8D8D,thickness=2].> Sb : <color:#8D8D8D>delivers push
Sb .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
Sb .[#8D8D8D,thickness=2].> ChatPlatform : <color:#8D8D8D>sends messages
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
skinparam person<<Organizer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<SiteAdmin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Bot>>{
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
skinparam rectangle<<ChatPlatform>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, keeps a personal agenda, arranges 1-on-1s." <<Attendee>> as Attendee
person "==Organizer\\n\\nConfigures an event: days, places, phases, booking rules, fixtures. Moderates. A role on a person, not a separate login." <<Organizer>> as Organizer
person "==Site admin\\n\\nRuns the installation: site settings, people, events, API tokens." <<SiteAdmin>> as SiteAdmin
person "==Bot / integration\\n\\nA script or chat bot holding an API token. Same API, same rules as a person." <<Bot>> as Bot
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==Reverse proxy\\n\\nTerminates TLS. Not part of the app; documented for self-hosters." <<ReverseProxy>> as ReverseProxy
rectangle "SchellingBoard" <<Sb>> as Sb {
  skinparam RectangleBorderColor<<Sb>> #3b82f6
  skinparam RectangleFontColor<<Sb>> #3b82f6
  skinparam RectangleBorderStyle<<Sb>> dashed

  rectangle "==Web app\\n<size:10>[React, Vite, TypeScript, PWA]</size>\\n\\nStatic single-page app. Holds a per-event replica and renders every view from it." <<SbWeb>> as SbWeb
  rectangle "==Server\\n<size:10>[Node, Hono, TypeScript]</size>\\n\\nOne process: HTTP API, change feed, background jobs. Serves the web app as static files." <<SbServer>> as SbServer
  database "==SQLite database\\n<size:10>[SQLite, WAL mode]</size>\\n\\nState tables plus the append-only change log. One file to back up." <<SbDb>> as SbDb
  database "==File store\\n<size:10>[Directory on disk]</size>\\n\\nAvatars and venue maps, re-encoded on upload, immutable names." <<SbFiles>> as SbFiles
}
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Chat platform\\n\\nTelegram, Matrix or Signal — reached through a channel adapter." <<ChatPlatform>> as ChatPlatform

Attendee .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>uses, installs on phone
Organizer .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>configures event, moderates
SiteAdmin .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>administers installation
Bot .[#8D8D8D,thickness=2].> SbServer : <color:#8D8D8D>calls with API token\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
PushService .[#8D8D8D,thickness=2].> SbWeb : <color:#8D8D8D>delivers push
ReverseProxy .[#8D8D8D,thickness=2].> SbServer : <color:#8D8D8D>forwards HTTPS
SbWeb .[#8D8D8D,thickness=2].> SbServer : <color:#8D8D8D>[...]
SbServer .[#8D8D8D,thickness=2].> SbDb : <color:#8D8D8D>reads and writes\\n<size:8>[<color:#8D8D8D>SQL via ports]</size>
SbServer .[#8D8D8D,thickness=2].> SbFiles : <color:#8D8D8D>stores uploads
SbServer .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
SbServer .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
SbServer .[#8D8D8D,thickness=2].> ChatPlatform : <color:#8D8D8D>sends messages
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

skinparam person<<Bot>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
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
skinparam rectangle<<SbServerMPersonal>>{
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
skinparam rectangle<<SbServerMIdentity>>{
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
skinparam rectangle<<SbServerMScheduling>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMMeetings>>{
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
skinparam rectangle<<ChatPlatform>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SbServerKernel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
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
skinparam rectangle<<SbServerMEvents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Bot / integration\\n\\nA script or chat bot holding an API token. Same API, same rules as a person." <<Bot>> as Bot
rectangle "==Web app\\n<size:10>[React, Vite, TypeScript, PWA]</size>\\n\\nStatic single-page app. Holds a per-event replica and renders every view from it." <<SbWeb>> as SbWeb
rectangle "Server" <<SbServer>> as SbServer {
  skinparam RectangleBorderColor<<SbServer>> #3b82f6
  skinparam RectangleFontColor<<SbServer>> #3b82f6
  skinparam RectangleBorderStyle<<SbServer>> dashed

  rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Auth, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
  rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
  rectangle "==Jobs\\n\\nSingle scheduler loop: reactions to changes, scheduled work (reminders, lapses), delivery attempts. Leased, idempotent." <<SbServerJobs>> as SbServerJobs
  rectangle "==personal\\n\\nPrivate marks (star, hide, note) on sessions, proposals and people. Preferences." <<SbServerMPersonal>> as SbServerMPersonal
  rectangle "==identity\\n\\nJoin links, email codes, passkeys, passwords, login sessions, API tokens, roles." <<SbServerMIdentity>> as SbServerMIdentity
  rectangle "==notifications\\n\\nNotification records, per-channel preferences and bindings, delivery log. Channels: in-app, email, push, chat." <<SbServerMNotifications>> as SbServerMNotifications
  rectangle "==proposals\\n\\nProposals, votes, proposal comments, attendance prediction." <<SbServerMProposals>> as SbServerMProposals
  rectangle "==scheduling\\n\\nSessions (kinds: session, shift, fixture), RSVPs, booking rules, reserved windows, capacity." <<SbServerMScheduling>> as SbServerMScheduling
  rectangle "==meetings\\n\\n1-on-1 requests, availability, meeting settings, lapse." <<SbServerMMeetings>> as SbServerMMeetings
  rectangle "==Kernel\\n\\nUnit of work, change log, clock, ids, actor context, errors. The only code every module may import." <<SbServerKernel>> as SbServerKernel
  rectangle "==venue\\n\\nPlaces (rooms, areas, meeting points), floors, directions, map pins." <<SbServerMVenue>> as SbServerMVenue
  rectangle "==people\\n\\nPersons, participation in events, profiles, profile comments, labels." <<SbServerMPeople>> as SbServerMPeople
  rectangle "==events\\n\\nEvent, days, phases, timezone, per-event settings." <<SbServerMEvents>> as SbServerMEvents
}
database "==SQLite database\\n<size:10>[SQLite, WAL mode]</size>\\n\\nState tables plus the append-only change log. One file to back up." <<SbDb>> as SbDb
database "==File store\\n<size:10>[Directory on disk]</size>\\n\\nAvatars and venue maps, re-encoded on upload, immutable names." <<SbFiles>> as SbFiles
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==Chat platform\\n\\nTelegram, Matrix or Signal — reached through a channel adapter." <<ChatPlatform>> as ChatPlatform

Bot .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>calls with API token\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbWeb .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>commands and queries\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbWeb .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>snapshot, then changes since seq\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMIdentity : <color:#8D8D8D>authenticates
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>invokes use cases
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>invokes use cases
SbServerFeed .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>reads change log
SbServerJobs .[#8D8D8D,thickness=2].> SbServerMNotifications : <color:#8D8D8D>runs reactions and deliveries
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>records changes
SbServerMPeople .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>participation is per event
SbServerMProposals .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases, days
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases, slot grid
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerMVenue : <color:#8D8D8D>reads places
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMVenue : <color:#8D8D8D>reads places
SbServerMIdentity .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>resolves persons
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>reads participations
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>references persons
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>references proposals
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMMeetings : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>sends email
SbServerMNotifications .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>sends Web Push
SbServerMNotifications .[#8D8D8D,thickness=2].> ChatPlatform : <color:#8D8D8D>sends messages
SbServer .[#8D8D8D,thickness=2].> SbDb : <color:#8D8D8D>reads and writes\\n<size:8>[<color:#8D8D8D>SQL via ports]</size>
SbServer .[#8D8D8D,thickness=2].> SbFiles : <color:#8D8D8D>stores uploads
@enduml
`;case`modules`:return`@startuml
title "L3 · Server: module dependencies"
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

skinparam rectangle<<SbServerMIdentity>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMPersonal>>{
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
skinparam rectangle<<SbServerMScheduling>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMMeetings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
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
skinparam rectangle<<SbServerMEvents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==identity\\n\\nJoin links, email codes, passkeys, passwords, login sessions, API tokens, roles." <<SbServerMIdentity>> as SbServerMIdentity
rectangle "==personal\\n\\nPrivate marks (star, hide, note) on sessions, proposals and people. Preferences." <<SbServerMPersonal>> as SbServerMPersonal
rectangle "==notifications\\n\\nNotification records, per-channel preferences and bindings, delivery log. Channels: in-app, email, push, chat." <<SbServerMNotifications>> as SbServerMNotifications
rectangle "==proposals\\n\\nProposals, votes, proposal comments, attendance prediction." <<SbServerMProposals>> as SbServerMProposals
rectangle "==scheduling\\n\\nSessions (kinds: session, shift, fixture), RSVPs, booking rules, reserved windows, capacity." <<SbServerMScheduling>> as SbServerMScheduling
rectangle "==meetings\\n\\n1-on-1 requests, availability, meeting settings, lapse." <<SbServerMMeetings>> as SbServerMMeetings
rectangle "==venue\\n\\nPlaces (rooms, areas, meeting points), floors, directions, map pins." <<SbServerMVenue>> as SbServerMVenue
rectangle "==people\\n\\nPersons, participation in events, profiles, profile comments, labels." <<SbServerMPeople>> as SbServerMPeople
rectangle "==events\\n\\nEvent, days, phases, timezone, per-event settings." <<SbServerMEvents>> as SbServerMEvents

SbServerMPeople .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>participation is per event
SbServerMIdentity .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>resolves persons
SbServerMProposals .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases, days
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerMVenue : <color:#8D8D8D>reads places
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMEvents : <color:#8D8D8D>reads phases, slot grid
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMVenue : <color:#8D8D8D>reads places
SbServerMMeetings .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>reads participations
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMPeople : <color:#8D8D8D>references persons
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>references proposals
SbServerMPersonal .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>[...]\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMProposals : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>reacts to\\n<size:8>[<color:#8D8D8D>change log]</size>
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

  rectangle "==PWA runtime\\n<size:10>[Service worker]</size>\\n\\nPrecached shell, push notifications, kiosk keep-awake." <<SbWebPwa>> as SbWebPwa
  rectangle "==Commands\\n\\nEvery mutation: predict with a domain policy, call the API, reconcile with the confirmed change." <<SbWebCommands>> as SbWebCommands
  rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
  rectangle "==Replica\\n\\nNormalized copy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
  rectangle "==Feature views\\n\\nSchedule, agenda, proposals, voting, people, meetings, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures
}
rectangle "Server" <<SbServer>> as SbServer {
  skinparam RectangleBorderColor<<SbServer>> #3b82f6
  skinparam RectangleFontColor<<SbServer>> #3b82f6
  skinparam RectangleBorderStyle<<SbServer>> dashed

  rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Auth, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
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
skinparam rectangle<<SbServerMScheduling>>{
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
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, keeps a personal agenda, arranges 1-on-1s." <<Attendee>> as Attendee
rectangle "==Feature views\\n\\nSchedule, agenda, proposals, voting, people, meetings, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures
rectangle "==Commands\\n\\nEvery mutation: predict with a domain policy, call the API, reconcile with the confirmed change." <<SbWebCommands>> as SbWebCommands
rectangle "==Replica\\n\\nNormalized copy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Auth, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==scheduling\\n\\nSessions (kinds: session, shift, fixture), RSVPs, booking rules, reserved windows, capacity." <<SbServerMScheduling>> as SbServerMScheduling
rectangle "==Kernel\\n\\nUnit of work, change log, clock, ids, actor context, errors. The only code every module may import." <<SbServerKernel>> as SbServerKernel
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed

Attendee .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>taps RSVP on a session
SbWebFeatures .[#8D8D8D,thickness=2].> SbWebCommands : <color:#8D8D8D>rsvp(sessionId)
SbWebCommands .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>apply predicted change (policy says allowed, capacity not exceeded)
SbWebCommands .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>POST /events/{slug}/sessions/{id}/rsvp (Idempotency-Key)\\n<size:8>[<color:#8D8D8D>HTTPS / JSON]</size>
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>rsvp use case: authorize, check phase and capacity, write, record change
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>commit state + change in one transaction
SbServerKernel .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>publish change seq N
SbServerFeed .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>change seq N to every viewer of the event (this one matches it to the prediction by command_key)
SbServerHttp .[#8D8D8D,thickness=2].> SbWebCommands : <color:#8D8D8D>201 with the recorded change
@enduml
`;case`flowSessionMoved`:return`@startuml
title "Flow · Organizer moves a session; attendees are told"
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

skinparam person<<Organizer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerHttp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SbServerMScheduling>>{
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
skinparam rectangle<<ChatPlatform>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Organizer\\n\\nConfigures an event: days, places, phases, booking rules, fixtures. Moderates. A role on a person, not a separate login." <<Organizer>> as Organizer
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Auth, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==scheduling\\n\\nSessions (kinds: session, shift, fixture), RSVPs, booking rules, reserved windows, capacity." <<SbServerMScheduling>> as SbServerMScheduling
rectangle "==Kernel\\n\\nUnit of work, change log, clock, ids, actor context, errors. The only code every module may import." <<SbServerKernel>> as SbServerKernel
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
rectangle "==Jobs\\n\\nSingle scheduler loop: reactions to changes, scheduled work (reminders, lapses), delivery attempts. Leased, idempotent." <<SbServerJobs>> as SbServerJobs
rectangle "==notifications\\n\\nNotification records, per-channel preferences and bindings, delivery log. Channels: in-app, email, push, chat." <<SbServerMNotifications>> as SbServerMNotifications
rectangle "==Email provider\\n\\nAny SMTP relay." <<Smtp>> as Smtp
rectangle "==Browser push services\\n\\nWeb Push endpoints operated by browser vendors." <<PushService>> as PushService
rectangle "==Chat platform\\n\\nTelegram, Matrix or Signal — reached through a channel adapter." <<ChatPlatform>> as ChatPlatform

Organizer .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>POST /sessions/{id}/move
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMScheduling : <color:#8D8D8D>move use case: booking rules, reserved windows, clash check
SbServerMScheduling .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>record SessionMoved
SbServerKernel .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>publish to event audience
SbServerJobs .[#8D8D8D,thickness=2].> SbServerMNotifications : <color:#8D8D8D>reaction: SessionMoved -> notifications for hosts and RSVP'd attendees
SbServerMNotifications .[#8D8D8D,thickness=2].> SbServerKernel : <color:#8D8D8D>record NotificationCreated (audience: one person each)
SbServerJobs .[#8D8D8D,thickness=2].> SbServerMNotifications : <color:#8D8D8D>delivery per bound channel with attempt log
SbServerMNotifications .[#8D8D8D,thickness=2].> Smtp : <color:#8D8D8D>email
SbServerMNotifications .[#8D8D8D,thickness=2].> PushService : <color:#8D8D8D>push
SbServerMNotifications .[#8D8D8D,thickness=2].> ChatPlatform : <color:#8D8D8D>chat message
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
skinparam rectangle<<SbServerMIdentity>>{
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
person "==Attendee\\n\\nProposes and votes on sessions, RSVPs, books slots, keeps a personal agenda, arranges 1-on-1s." <<Attendee>> as Attendee
rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
rectangle "==HTTP API\\n<size:10>[OpenAPI 3.1]</size>\\n\\nVersioned REST endpoints generated from the contracts package. Auth, rate limiting, problem-details errors." <<SbServerHttp>> as SbServerHttp
rectangle "==identity\\n\\nJoin links, email codes, passkeys, passwords, login sessions, API tokens, roles." <<SbServerMIdentity>> as SbServerMIdentity
rectangle "==Replica\\n\\nNormalized copy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed

Attendee .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>opens /join/{token} from email or QR
SbWebShell .[#8D8D8D,thickness=2].> SbServerHttp : <color:#8D8D8D>POST /auth/join {token}
SbServerHttp .[#8D8D8D,thickness=2].> SbServerMIdentity : <color:#8D8D8D>validate token, create a verified login session
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
rectangle "==PWA runtime\\n<size:10>[Service worker]</size>\\n\\nPrecached shell, push notifications, kiosk keep-awake." <<SbWebPwa>> as SbWebPwa
rectangle "==Shell & router\\n\\nRoutes, layout, auth gate, theme. Nothing here knows the domain." <<SbWebShell>> as SbWebShell
rectangle "==Replica\\n\\nNormalized copy of one event as the viewer may see it. Snapshot + change feed, persisted in IndexedDB." <<SbWebReplica>> as SbWebReplica
rectangle "==Change feed\\n<size:10>[SSE]</size>\\n\\nPer-viewer stream of changes filtered by audience, resumable by sequence number. Also builds snapshots." <<SbServerFeed>> as SbServerFeed
rectangle "==Feature views\\n\\nSchedule, agenda, proposals, voting, people, meetings, settings, admin. Pure functions of replica + local UI state." <<SbWebFeatures>> as SbWebFeatures

SbWebPwa .[#8D8D8D,thickness=2].> SbWebShell : <color:#8D8D8D>app opened offline: shell from precache
SbWebShell .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>load persisted replica (seq 4120), show 'last synced 14:02'
SbWebReplica .[#8D8D8D,thickness=2].> SbServerFeed : <color:#8D8D8D>GET feed?since=4120\\n<size:8>[<color:#8D8D8D>Server-Sent Events]</size>
SbServerFeed .[#8D8D8D,thickness=2].> SbWebReplica : <color:#8D8D8D>changes 4121..4187, or 410 Gone if pruned → full snapshot
SbWebReplica .[#8D8D8D,thickness=2].> SbWebFeatures : <color:#8D8D8D>re-render, banner disappears
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};