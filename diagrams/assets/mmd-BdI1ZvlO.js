var e=e=>{switch(e){case`index`:return`---
title: "L1 · System context"
---
graph TB
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  Organizer@{ icon: "fa:user", shape: rounded, label: "Organizer" }
  SiteAdmin@{ icon: "fa:user", shape: rounded, label: "Site admin" }
  Bot@{ icon: "fa:user", shape: rounded, label: "Bot / integration" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  Sb@{ shape: rectangle, label: "SchellingBoard" }
  Smtp@{ shape: rectangle, label: "Email provider" }
  ChatPlatform@{ shape: rectangle, label: "Chat platform" }
  Attendee -. "\`uses, installs on phone\`" .-> Sb
  Organizer -. "\`configures event, moderates\`" .-> Sb
  SiteAdmin -. "\`administers installation\`" .-> Sb
  Bot -. "\`calls with API token\`" .-> Sb
  Sb -. "\`sends email\`" .-> Smtp
  PushService -. "\`delivers push\`" .-> Sb
  Sb -. "\`sends Web Push\`" .-> PushService
  Sb -. "\`sends messages\`" .-> ChatPlatform
`;case`containers`:return`---
title: "L2 · Containers"
---
graph LR
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  Organizer@{ icon: "fa:user", shape: rounded, label: "Organizer" }
  SiteAdmin@{ icon: "fa:user", shape: rounded, label: "Site admin" }
  Bot@{ icon: "fa:user", shape: rounded, label: "Bot / integration" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  ReverseProxy@{ shape: rectangle, label: "Reverse proxy" }
  subgraph Sb["\`SchellingBoard\`"]
    Sb.Web@{ shape: rectangle, label: "Web app" }
    Sb.Server@{ shape: rectangle, label: "Server" }
    Sb.Db@{ shape: disk, label: "SQLite database" }
    Sb.Files@{ shape: disk, label: "File store" }
  end
  Smtp@{ shape: rectangle, label: "Email provider" }
  ChatPlatform@{ shape: rectangle, label: "Chat platform" }
  Attendee -. "\`uses, installs on phone\`" .-> Sb.Web
  Organizer -. "\`configures event, moderates\`" .-> Sb.Web
  SiteAdmin -. "\`administers installation\`" .-> Sb.Web
  Bot -. "\`calls with API token\`" .-> Sb.Server
  PushService -. "\`delivers push\`" .-> Sb.Web
  ReverseProxy -. "\`forwards HTTPS\`" .-> Sb.Server
  Sb.Web -. "\`[...]\`" .-> Sb.Server
  Sb.Server -. "\`reads and writes\`" .-> Sb.Db
  Sb.Server -. "\`stores uploads\`" .-> Sb.Files
  Sb.Server -. "\`sends email\`" .-> Smtp
  Sb.Server -. "\`sends Web Push\`" .-> PushService
  Sb.Server -. "\`sends messages\`" .-> ChatPlatform
`;case`server`:return'---\ntitle: "L3 · Server: infrastructure components and modules"\n---\ngraph TB\n  Bot@{ icon: "fa:user", shape: rounded, label: "Bot / integration" }\n  SbWeb@{ shape: rectangle, label: "Web app" }\n  subgraph SbServer["`Server`"]\n    SbServer.Http@{ shape: rectangle, label: "HTTP API" }\n    SbServer.Feed@{ shape: rectangle, label: "Change feed" }\n    SbServer.Jobs@{ shape: rectangle, label: "Jobs" }\n    SbServer.MPersonal@{ shape: rectangle, label: "personal" }\n    SbServer.MIdentity@{ shape: rectangle, label: "identity" }\n    SbServer.MNotifications@{ shape: rectangle, label: "notifications" }\n    SbServer.MProposals@{ shape: rectangle, label: "proposals" }\n    SbServer.MScheduling@{ shape: rectangle, label: "scheduling" }\n    SbServer.MMeetings@{ shape: rectangle, label: "meetings" }\n    SbServer.Kernel@{ shape: rectangle, label: "Kernel" }\n    SbServer.MVenue@{ shape: rectangle, label: "venue" }\n    SbServer.MPeople@{ shape: rectangle, label: "people" }\n    SbServer.MEvents@{ shape: rectangle, label: "events" }\n  end\n  SbDb@{ shape: disk, label: "SQLite database" }\n  SbFiles@{ shape: disk, label: "File store" }\n  Smtp@{ shape: rectangle, label: "Email provider" }\n  PushService@{ shape: rectangle, label: "Browser push services" }\n  ChatPlatform@{ shape: rectangle, label: "Chat platform" }\n  Bot -. "`calls with API token`" .-> SbServer.Http\n  SbWeb -. "`commands and queries`" .-> SbServer.Http\n  SbWeb -. "`snapshot, then changes since seq`" .-> SbServer.Feed\n  SbServer.Http -. "`authenticates`" .-> SbServer.MIdentity\n  SbServer.Http -. "`invokes use cases`" .-> SbServer.MProposals\n  SbServer.Http -. "`invokes use cases`" .-> SbServer.MScheduling\n  SbServer.Feed -. "`reads change log`" .-> SbServer.Kernel\n  SbServer.Jobs -. "`runs reactions and deliveries`" .-> SbServer.MNotifications\n  SbServer.MScheduling -. "`records changes`" .-> SbServer.Kernel\n  SbServer.MPeople -. "`participation is per event`" .-> SbServer.MEvents\n  SbServer.MProposals -. "`reads phases`" .-> SbServer.MEvents\n  SbServer.MScheduling -. "`reads phases, days`" .-> SbServer.MEvents\n  SbServer.MMeetings -. "`reads phases, slot grid`" .-> SbServer.MEvents\n  SbServer.MScheduling -. "`reads places`" .-> SbServer.MVenue\n  SbServer.MMeetings -. "`reads places`" .-> SbServer.MVenue\n  SbServer.MIdentity -. "`resolves persons`" .-> SbServer.MPeople\n  SbServer.MMeetings -. "`reads participations`" .-> SbServer.MPeople\n  SbServer.MPersonal -. "`references persons`" .-> SbServer.MPeople\n  SbServer.MPersonal -. "`references proposals`" .-> SbServer.MProposals\n  SbServer.MNotifications -. "`reacts to`" .-> SbServer.MProposals\n  SbServer.MPersonal -. "`[...]`" .-> SbServer.MScheduling\n  SbServer.MNotifications -. "`reacts to`" .-> SbServer.MScheduling\n  SbServer.MNotifications -. "`reacts to`" .-> SbServer.MMeetings\n  SbServer.MNotifications -. "`sends email`" .-> Smtp\n  SbServer.MNotifications -. "`sends Web Push`" .-> PushService\n  SbServer.MNotifications -. "`sends messages`" .-> ChatPlatform\n  SbServer -. "`reads and writes`" .-> SbDb\n  SbServer -. "`stores uploads`" .-> SbFiles\n';case`modules`:return'---\ntitle: "L3 · Server: module dependencies"\n---\ngraph BT\n  SbServerMIdentity@{ shape: rectangle, label: "identity" }\n  SbServerMPersonal@{ shape: rectangle, label: "personal" }\n  SbServerMNotifications@{ shape: rectangle, label: "notifications" }\n  SbServerMProposals@{ shape: rectangle, label: "proposals" }\n  SbServerMScheduling@{ shape: rectangle, label: "scheduling" }\n  SbServerMMeetings@{ shape: rectangle, label: "meetings" }\n  SbServerMVenue@{ shape: rectangle, label: "venue" }\n  SbServerMPeople@{ shape: rectangle, label: "people" }\n  SbServerMEvents@{ shape: rectangle, label: "events" }\n  SbServerMPeople -. "`participation is per event`" .-> SbServerMEvents\n  SbServerMIdentity -. "`resolves persons`" .-> SbServerMPeople\n  SbServerMProposals -. "`reads phases`" .-> SbServerMEvents\n  SbServerMScheduling -. "`reads phases, days`" .-> SbServerMEvents\n  SbServerMScheduling -. "`reads places`" .-> SbServerMVenue\n  SbServerMMeetings -. "`reads phases, slot grid`" .-> SbServerMEvents\n  SbServerMMeetings -. "`reads places`" .-> SbServerMVenue\n  SbServerMMeetings -. "`reads participations`" .-> SbServerMPeople\n  SbServerMPersonal -. "`references persons`" .-> SbServerMPeople\n  SbServerMPersonal -. "`references proposals`" .-> SbServerMProposals\n  SbServerMPersonal -. "`[...]`" .-> SbServerMScheduling\n  SbServerMNotifications -. "`reacts to`" .-> SbServerMProposals\n  SbServerMNotifications -. "`reacts to`" .-> SbServerMScheduling\n  SbServerMNotifications -. "`reacts to`" .-> SbServerMMeetings\n';case`web`:return`---
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
  SbServerMScheduling@{ shape: rectangle, label: "scheduling" }
  SbServerKernel@{ shape: rectangle, label: "Kernel" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  Attendee -. "\`taps RSVP on a session\`" .-> SbWebFeatures
  SbWebFeatures -. "\`rsvp(sessionId)\`" .-> SbWebCommands
  SbWebCommands -. "\`apply predicted change (policy says allowed, capacity not exceeded)\`" .-> SbWebReplica
  SbWebCommands -. "\`POST /events/{slug}/sessions/{id}/rsvp (Idempotency-Key)\`" .-> SbServerHttp
  SbServerHttp -. "\`rsvp use case: authorize, check phase and capacity, write, record change\`" .-> SbServerMScheduling
  SbServerMScheduling -. "\`commit state + change in one transaction\`" .-> SbServerKernel
  SbServerKernel -. "\`publish change seq N\`" .-> SbServerFeed
  SbServerFeed -. "\`change seq N to every viewer of the event (this one matches it to the prediction by command_key)\`" .-> SbWebReplica
  SbServerHttp -. "\`201 with the recorded change\`" .-> SbWebCommands
`;case`flowSessionMoved`:return`---
title: "Flow · Organizer moves a session; attendees are told"
---
graph LR
  Organizer@{ icon: "fa:user", shape: rounded, label: "Organizer" }
  SbServerHttp@{ shape: rectangle, label: "HTTP API" }
  SbServerMScheduling@{ shape: rectangle, label: "scheduling" }
  SbServerKernel@{ shape: rectangle, label: "Kernel" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  SbServerJobs@{ shape: rectangle, label: "Jobs" }
  SbServerMNotifications@{ shape: rectangle, label: "notifications" }
  Smtp@{ shape: rectangle, label: "Email provider" }
  PushService@{ shape: rectangle, label: "Browser push services" }
  ChatPlatform@{ shape: rectangle, label: "Chat platform" }
  Organizer -. "\`POST /sessions/{id}/move\`" .-> SbServerHttp
  SbServerHttp -. "\`move use case: booking rules, reserved windows, clash check\`" .-> SbServerMScheduling
  SbServerMScheduling -. "\`record SessionMoved\`" .-> SbServerKernel
  SbServerKernel -. "\`publish to event audience\`" .-> SbServerFeed
  SbServerJobs -. "\`reaction: SessionMoved -> notifications for hosts and RSVP'd attendees\`" .-> SbServerMNotifications
  SbServerMNotifications -. "\`record NotificationCreated (audience: one person each)\`" .-> SbServerKernel
  SbServerJobs -. "\`delivery per bound channel with attempt log\`" .-> SbServerMNotifications
  SbServerMNotifications -. "\`email\`" .-> Smtp
  SbServerMNotifications -. "\`push\`" .-> PushService
  SbServerMNotifications -. "\`chat message\`" .-> ChatPlatform
`;case`flowJoin`:return`---
title: "Flow · First login through a personal join link"
---
graph LR
  Attendee@{ icon: "fa:user", shape: rounded, label: "Attendee" }
  SbWebShell@{ shape: rectangle, label: "Shell & router" }
  SbServerHttp@{ shape: rectangle, label: "HTTP API" }
  SbServerMIdentity@{ shape: rectangle, label: "identity" }
  SbWebReplica@{ shape: rectangle, label: "Replica" }
  SbServerFeed@{ shape: rectangle, label: "Change feed" }
  Attendee -. "\`opens /join/{token} from email or QR\`" .-> SbWebShell
  SbWebShell -. "\`POST /auth/join {token}\`" .-> SbServerHttp
  SbServerHttp -. "\`validate token, create a verified login session\`" .-> SbServerMIdentity
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
  SbServerFeed -. "\`changes 4121..4187, or 410 Gone if pruned → full snapshot\`" .-> SbWebReplica
  SbWebReplica -. "\`re-render, banner disappears\`" .-> SbWebFeatures
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};