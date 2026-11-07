var e=e=>{switch(e){case`index`:return`---
title: "L1 · System context"
---
graph TB
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  SiteAdmin@{ icon: "fa:user", shape: rounded, label: "Site admin" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  Sb@{ shape: rectangle, label: "SchellingBoard" }
  Smtp@{ shape: rectangle, label: "Email provider" }
  Attendee -. "\`uses, installs on phone\`" .-> Sb
  SiteAdmin -. "\`administers installation\`" .-> Sb
  Sb -. "\`sends email\`" .-> Smtp
  PushService -. "\`delivers push\`" .-> Sb
  Sb -. "\`sends Web Push\`" .-> PushService
`;case`containers`:return`---
title: "L2 · Containers"
---
graph LR
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  SiteAdmin@{ icon: "fa:user", shape: rounded, label: "Site admin" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  ReverseProxy@{ shape: rectangle, label: "Reverse proxy" }
  subgraph Sb["\`SchellingBoard\`"]
    Sb.Web@{ shape: rectangle, label: "Web app" }
    Sb.Server@{ shape: rectangle, label: "Server" }
    Sb.Db@{ shape: disk, label: "SQLite database" }
    Sb.Files@{ shape: disk, label: "File store" }
  end
  Smtp@{ shape: rectangle, label: "Email provider" }
  Attendee -. "\`uses, installs on phone\`" .-> Sb.Web
  SiteAdmin -. "\`administers installation\`" .-> Sb.Web
  PushService -. "\`delivers push\`" .-> Sb.Web
  ReverseProxy -. "\`forwards HTTPS\`" .-> Sb.Server
  Sb.Web -. "\`[...]\`" .-> Sb.Server
  Sb.Server -. "\`reads and writes\`" .-> Sb.Db
  Sb.Server -. "\`stores uploads\`" .-> Sb.Files
  Sb.Server -. "\`sends email\`" .-> Smtp
  Sb.Server -. "\`sends Web Push\`" .-> PushService
`;case`server`:return`---
title: "L3 · Server: infrastructure components and modules"
---
graph TB
  SbWeb@{ shape: rectangle, label: "Web app" }
  subgraph SbServer["\`Server\`"]
    SbServer.Http@{ shape: rectangle, label: "HTTP API" }
    SbServer.Feed@{ shape: rectangle, label: "Change feed" }
    SbServer.Jobs@{ shape: rectangle, label: "Jobs" }
    SbServer.MVenue@{ shape: rectangle, label: "venue" }
    SbServer.MComments@{ shape: rectangle, label: "comments" }
    SbServer.MSettings@{ shape: rectangle, label: "settings" }
    SbServer.MUpdates@{ shape: rectangle, label: "updates" }
    SbServer.MPeople@{ shape: rectangle, label: "people" }
    SbServer.MNotifications@{ shape: rectangle, label: "notifications" }
    SbServer.MProposals@{ shape: rectangle, label: "proposals" }
    SbServer.MSessions@{ shape: rectangle, label: "sessions" }
    SbServer.MMeetings@{ shape: rectangle, label: "meetings" }
    SbServer.Kernel@{ shape: rectangle, label: "Kernel" }
    SbServer.MEvents@{ shape: rectangle, label: "events" }
  end
  SbDb@{ shape: disk, label: "SQLite database" }
  SbFiles@{ shape: disk, label: "File store" }
  Smtp@{ shape: rectangle, label: "Email provider" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  SbWeb -. "\`commands and queries\`" .-> SbServer.Http
  SbWeb -. "\`snapshot, then changes since seq\`" .-> SbServer.Feed
  SbServer.Http -. "\`signs in, resolves the actor\`" .-> SbServer.MPeople
  SbServer.Http -. "\`invokes use cases\`" .-> SbServer.MProposals
  SbServer.Http -. "\`invokes use cases\`" .-> SbServer.MSessions
  SbServer.Feed -. "\`reads change log\`" .-> SbServer.Kernel
  SbServer.Jobs -. "\`runs reactions and deliveries\`" .-> SbServer.MNotifications
  SbServer.MSessions -. "\`records changes\`" .-> SbServer.Kernel
  SbServer.MMeetings -. "\`reads phases and days\`" .-> SbServer.MEvents
  SbServer.MNotifications -. "\`reacts to\`" .-> SbServer.MProposals
  SbServer.MNotifications -. "\`reacts to\`" .-> SbServer.MSessions
  SbServer.MNotifications -. "\`reacts to\`" .-> SbServer.MMeetings
  SbServer.Jobs -. "\`sends email\`" .-> Smtp
  SbServer.Jobs -. "\`sends Web Push\`" .-> PushService
  SbServer -. "\`reads and writes\`" .-> SbDb
  SbServer -. "\`stores uploads\`" .-> SbFiles
`;case`modules`:return`---
title: "L3 · Server: modules"
---
graph BT
  SbServerMVenue@{ shape: rectangle, label: "venue" }
  SbServerMPeople@{ shape: rectangle, label: "people" }
  SbServerMComments@{ shape: rectangle, label: "comments" }
  SbServerMNotifications@{ shape: rectangle, label: "notifications" }
  SbServerMProposals@{ shape: rectangle, label: "proposals" }
  SbServerMSessions@{ shape: rectangle, label: "sessions" }
  SbServerMMeetings@{ shape: rectangle, label: "meetings" }
  SbServerMEvents@{ shape: rectangle, label: "events" }
  SbServerMSettings@{ shape: rectangle, label: "settings" }
  SbServerMUpdates@{ shape: rectangle, label: "updates" }
  SbServerMMeetings -. "\`reads phases and days\`" .-> SbServerMEvents
  SbServerMNotifications -. "\`reacts to\`" .-> SbServerMProposals
  SbServerMNotifications -. "\`reacts to\`" .-> SbServerMSessions
  SbServerMNotifications -. "\`reacts to\`" .-> SbServerMMeetings
`;case`web`:return`---
title: "L3 · Web app components"
---
graph TB
  PushService@{ shape: rectangle, label: "Browser push services" }
  subgraph SbWeb["\`Web app\`"]
    SbWeb.Pwa@{ shape: rectangle, label: "PWA runtime" }
    SbWeb.Commands@{ shape: rectangle, label: "Commands" }
    SbWeb.Shell@{ shape: rectangle, label: "Shell & router" }
    SbWeb.Replica@{ shape: rectangle, label: "Replica" }
    SbWeb.Features@{ shape: rectangle, label: "Feature views" }
  end
  subgraph SbServer["\`Server\`"]
    SbServer.Http@{ shape: rectangle, label: "HTTP API" }
    SbServer.Feed@{ shape: rectangle, label: "Change feed" }
  end
  PushService -. "\`delivers push\`" .-> SbWeb.Pwa
  SbWeb.Shell -. "\`routes to\`" .-> SbWeb.Features
  SbWeb.Pwa -. "\`installs, delivers push\`" .-> SbWeb.Shell
  SbWeb.Replica -. "\`renders from\`" .-> SbWeb.Features
  SbWeb.Commands -. "\`predicts, then reconciles\`" .-> SbWeb.Replica
  SbWeb.Commands -. "\`commands and queries\`" .-> SbServer.Http
  SbWeb.Replica -. "\`snapshot, then changes since seq\`" .-> SbServer.Feed
`;case`flowRsvp`:return`---
title: "Flow · RSVP with optimistic update and live propagation"
---
graph LR
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  SbWebFeatures@{ shape: rectangle, label: "Feature views" }
  SbWebCommands@{ shape: rectangle, label: "Commands" }
  SbWebReplica@{ shape: rectangle, label: "Replica" }
  SbServerHttp@{ shape: rectangle, label: "HTTP API" }
  SbServerMSessions@{ shape: rectangle, label: "sessions" }
  SbServerKernel@{ shape: rectangle, label: "Kernel" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  Attendee -. "\`taps RSVP on a session\`" .-> SbWebFeatures
  SbWebFeatures -. "\`rsvp(sessionId)\`" .-> SbWebCommands
  SbWebCommands -. "\`apply predicted change (policy says allowed, capacity not exceeded)\`" .-> SbWebReplica
  SbWebCommands -. "\`PUT /sessions/{id}/rsvps/{guestId} (Idempotency-Key)\`" .-> SbServerHttp
  SbServerHttp -. "\`rsvp use case: check phase and capacity, write, record change\`" .-> SbServerMSessions
  SbServerMSessions -. "\`commit state + change in one transaction\`" .-> SbServerKernel
  SbServerKernel -. "\`publish change seq N\`" .-> SbServerFeed
  SbServerFeed -. "\`change seq N to every viewer of the event (this one matches it to the prediction by command_key)\`" .-> SbWebReplica
  SbServerHttp -. "\`the result, with the recorded change\`" .-> SbWebCommands
`;case`flowSessionChanged`:return`---
title: "Flow · Site admin edits a session; attendees are told"
---
graph LR
  SiteAdmin@{ icon: "fa:user", shape: rounded, label: "Site admin" }
  SbServerHttp@{ shape: rectangle, label: "HTTP API" }
  SbServerMSessions@{ shape: rectangle, label: "sessions" }
  SbServerKernel@{ shape: rectangle, label: "Kernel" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  SbServerJobs@{ shape: rectangle, label: "Jobs" }
  SbServerMNotifications@{ shape: rectangle, label: "notifications" }
  Smtp@{ shape: rectangle, label: "Email provider" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  SiteAdmin -. "\`PUT /sessions/{id}\`" .-> SbServerHttp
  SbServerHttp -. "\`update use case: clash check\`" .-> SbServerMSessions
  SbServerMSessions -. "\`record session.changed\`" .-> SbServerKernel
  SbServerKernel -. "\`publish to the event audience\`" .-> SbServerFeed
  SbServerJobs -. "\`reaction: session.changed -> notifications for hosts and RSVP'd attendees\`" .-> SbServerMNotifications
  SbServerJobs -. "\`delivery: email\`" .-> Smtp
  SbServerJobs -. "\`delivery: push\`" .-> PushService
`;case`flowJoin`:return`---
title: "Flow · First login through a personal join link"
---
graph LR
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  SbWebShell@{ shape: rectangle, label: "Shell & router" }
  SbServerHttp@{ shape: rectangle, label: "HTTP API" }
  SbServerMPeople@{ shape: rectangle, label: "people" }
  SbWebReplica@{ shape: rectangle, label: "Replica" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  Attendee -. "\`opens /join/{token} from email\`" .-> SbWebShell
  SbWebShell -. "\`POST /auth/join {token}\`" .-> SbServerHttp
  SbServerHttp -. "\`validate token, create a verified login session\`" .-> SbServerMPeople
  SbServerHttp -. "\`Set-Cookie (httpOnly, SameSite=Lax) + actor context\`" .-> SbWebShell
  SbWebShell -. "\`load event\`" .-> SbWebReplica
  SbWebReplica -. "\`GET snapshot, then subscribe since seq\`" .-> SbServerFeed
`;case`flowReconnect`:return`---
title: "Flow · Back online after a wifi drop"
---
graph LR
  SbWebPwa@{ shape: rectangle, label: "PWA runtime" }
  SbWebShell@{ shape: rectangle, label: "Shell & router" }
  SbWebReplica@{ shape: rectangle, label: "Replica" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  SbWebFeatures@{ shape: rectangle, label: "Feature views" }
  SbWebPwa -. "\`app opened offline: shell from precache\`" .-> SbWebShell
  SbWebShell -. "\`load persisted replica (seq 4120), show 'last synced 14:02'\`" .-> SbWebReplica
  SbWebReplica -. "\`GET feed?since=4120\`" .-> SbServerFeed
  SbServerFeed -. "\`changes 4121..4187, or a reset message if pruned → full snapshot\`" .-> SbWebReplica
  SbWebReplica -. "\`re-render, banner disappears\`" .-> SbWebFeatures
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};