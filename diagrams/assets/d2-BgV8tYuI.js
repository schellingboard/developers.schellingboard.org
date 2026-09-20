var e=e=>{switch(e){case`index`:return`direction: down

Attendee: {
  label: "Attendee"
  shape: c4-person
}
Organizer: {
  label: "Organizer"
  shape: c4-person
}
SiteAdmin: {
  label: "Site admin"
  shape: c4-person
}
Bot: {
  label: "Bot / integration"
  shape: c4-person
}
PushService: {
  label: "Browser push services"
}
Sb: {
  label: "SchellingBoard"
}
Smtp: {
  label: "Email provider"
}
ChatPlatform: {
  label: "Chat platform"
}

Attendee -> Sb: "uses, installs on phone"
Organizer -> Sb: "configures event, moderates"
SiteAdmin -> Sb: "administers installation"
Bot -> Sb: "calls with API token"
Sb -> Smtp: "sends email"
PushService -> Sb: "delivers push"
Sb -> PushService: "sends Web Push"
Sb -> ChatPlatform: "sends messages"
`;case`containers`:return`direction: right

Attendee: {
  label: "Attendee"
  shape: c4-person
}
Organizer: {
  label: "Organizer"
  shape: c4-person
}
SiteAdmin: {
  label: "Site admin"
  shape: c4-person
}
Bot: {
  label: "Bot / integration"
  shape: c4-person
}
PushService: {
  label: "Browser push services"
}
ReverseProxy: {
  label: "Reverse proxy"
}
Sb: {
  label: "SchellingBoard"

  Web: {
    label: "Web app"
  }
  Server: {
    label: "Server"
  }
  Db: {
    label: "SQLite database"
    shape: stored_data
  }
  Files: {
    label: "File store"
    shape: stored_data
  }
}
Smtp: {
  label: "Email provider"
}
ChatPlatform: {
  label: "Chat platform"
}

Attendee -> Sb.Web: "uses, installs on phone"
Organizer -> Sb.Web: "configures event, moderates"
SiteAdmin -> Sb.Web: "administers installation"
Bot -> Sb.Server: "calls with API token"
PushService -> Sb.Web: "delivers push"
ReverseProxy -> Sb.Server: "forwards HTTPS"
Sb.Web -> Sb.Server: "[...]"
Sb.Server -> Sb.Db: "reads and writes"
Sb.Server -> Sb.Files: "stores uploads"
Sb.Server -> Smtp: "sends email"
Sb.Server -> PushService: "sends Web Push"
Sb.Server -> ChatPlatform: "sends messages"
`;case`server`:return`direction: down

Bot: {
  label: "Bot / integration"
  shape: c4-person
}
SbWeb: {
  label: "Web app"
}
SbServer: {
  label: "Server"

  Http: {
    label: "HTTP API"
  }
  Feed: {
    label: "Change feed"
  }
  Jobs: {
    label: "Jobs"
  }
  MPersonal: {
    label: "personal"
  }
  MIdentity: {
    label: "identity"
  }
  MNotifications: {
    label: "notifications"
  }
  MProposals: {
    label: "proposals"
  }
  MScheduling: {
    label: "scheduling"
  }
  MMeetings: {
    label: "meetings"
  }
  Kernel: {
    label: "Kernel"
  }
  MVenue: {
    label: "venue"
  }
  MPeople: {
    label: "people"
  }
  MEvents: {
    label: "events"
  }
}
SbDb: {
  label: "SQLite database"
  shape: stored_data
}
SbFiles: {
  label: "File store"
  shape: stored_data
}
Smtp: {
  label: "Email provider"
}
PushService: {
  label: "Browser push services"
}
ChatPlatform: {
  label: "Chat platform"
}

Bot -> SbServer.Http: "calls with API token"
SbWeb -> SbServer.Http: "commands and queries"
SbWeb -> SbServer.Feed: "snapshot, then changes since seq"
SbServer.Http -> SbServer.MIdentity: "authenticates"
SbServer.Http -> SbServer.MProposals: "invokes use cases"
SbServer.Http -> SbServer.MScheduling: "invokes use cases"
SbServer.Feed -> SbServer.Kernel: "reads change log"
SbServer.Jobs -> SbServer.MNotifications: "runs reactions and deliveries"
SbServer.MScheduling -> SbServer.Kernel: "records changes"
SbServer.MPeople -> SbServer.MEvents: "participation is per event"
SbServer.MProposals -> SbServer.MEvents: "reads phases"
SbServer.MScheduling -> SbServer.MEvents: "reads phases, days"
SbServer.MMeetings -> SbServer.MEvents: "reads phases, slot grid"
SbServer.MScheduling -> SbServer.MVenue: "reads places"
SbServer.MMeetings -> SbServer.MVenue: "reads places"
SbServer.MIdentity -> SbServer.MPeople: "resolves persons"
SbServer.MMeetings -> SbServer.MPeople: "reads participations"
SbServer.MPersonal -> SbServer.MPeople: "references persons"
SbServer.MPersonal -> SbServer.MProposals: "references proposals"
SbServer.MNotifications -> SbServer.MProposals: "reacts to"
SbServer.MPersonal -> SbServer.MScheduling: "[...]"
SbServer.MNotifications -> SbServer.MScheduling: "reacts to"
SbServer.MNotifications -> SbServer.MMeetings: "reacts to"
SbServer.MNotifications -> Smtp: "sends email"
SbServer.MNotifications -> PushService: "sends Web Push"
SbServer.MNotifications -> ChatPlatform: "sends messages"
SbServer -> SbDb: "reads and writes"
SbServer -> SbFiles: "stores uploads"
`;case`modules`:return`direction: up

SbServerMIdentity: {
  label: "identity"
}
SbServerMPersonal: {
  label: "personal"
}
SbServerMNotifications: {
  label: "notifications"
}
SbServerMProposals: {
  label: "proposals"
}
SbServerMScheduling: {
  label: "scheduling"
}
SbServerMMeetings: {
  label: "meetings"
}
SbServerMVenue: {
  label: "venue"
}
SbServerMPeople: {
  label: "people"
}
SbServerMEvents: {
  label: "events"
}

SbServerMPeople -> SbServerMEvents: "participation is per event"
SbServerMIdentity -> SbServerMPeople: "resolves persons"
SbServerMProposals -> SbServerMEvents: "reads phases"
SbServerMScheduling -> SbServerMEvents: "reads phases, days"
SbServerMScheduling -> SbServerMVenue: "reads places"
SbServerMMeetings -> SbServerMEvents: "reads phases, slot grid"
SbServerMMeetings -> SbServerMVenue: "reads places"
SbServerMMeetings -> SbServerMPeople: "reads participations"
SbServerMPersonal -> SbServerMPeople: "references persons"
SbServerMPersonal -> SbServerMProposals: "references proposals"
SbServerMPersonal -> SbServerMScheduling: "[...]"
SbServerMNotifications -> SbServerMProposals: "reacts to"
SbServerMNotifications -> SbServerMScheduling: "reacts to"
SbServerMNotifications -> SbServerMMeetings: "reacts to"
`;case`web`:return`direction: down

PushService: {
  label: "Browser push services"
}
SbWeb: {
  label: "Web app"

  Pwa: {
    label: "PWA runtime"
  }
  Commands: {
    label: "Commands"
  }
  Shell: {
    label: "Shell & router"
  }
  Replica: {
    label: "Replica"
  }
  Features: {
    label: "Feature views"
  }
}
SbServer: {
  label: "Server"

  Http: {
    label: "HTTP API"
  }
  Feed: {
    label: "Change feed"
  }
}

PushService -> SbWeb.Pwa: "delivers push"
SbWeb.Shell -> SbWeb.Features: "routes to"
SbWeb.Pwa -> SbWeb.Shell: "installs, delivers push"
SbWeb.Replica -> SbWeb.Features: "renders from"
SbWeb.Commands -> SbWeb.Replica: "predicts, then reconciles"
SbWeb.Commands -> SbServer.Http: "commands and queries"
SbWeb.Replica -> SbServer.Feed: "snapshot, then changes since seq"
`;case`flowRsvp`:return`direction: right

Attendee: {
  label: "Attendee"
  shape: c4-person
}
SbWebFeatures: {
  label: "Feature views"
}
SbWebCommands: {
  label: "Commands"
}
SbWebReplica: {
  label: "Replica"
}
SbServerHttp: {
  label: "HTTP API"
}
SbServerMScheduling: {
  label: "scheduling"
}
SbServerKernel: {
  label: "Kernel"
}
SbServerFeed: {
  label: "Change feed"
}

Attendee -> SbWebFeatures: "taps RSVP on a session"
SbWebFeatures -> SbWebCommands: "rsvp(sessionId)"
SbWebCommands -> SbWebReplica: "apply predicted change (policy says allowed, capacity not exceeded)"
SbWebCommands -> SbServerHttp: "POST /events/{slug}/sessions/{id}/rsvp (Idempotency-Key)"
SbServerHttp -> SbServerMScheduling: "rsvp use case: authorize, check phase and capacity, write, record change"
SbServerMScheduling -> SbServerKernel: "commit state + change in one transaction"
SbServerKernel -> SbServerFeed: "publish change seq N"
SbServerFeed -> SbWebReplica: "change seq N to every viewer of the event (this one matches it to the prediction by command_key)"
SbServerHttp -> SbWebCommands: "201 with the recorded change"
`;case`flowSessionMoved`:return`direction: right

Organizer: {
  label: "Organizer"
  shape: c4-person
}
SbServerHttp: {
  label: "HTTP API"
}
SbServerMScheduling: {
  label: "scheduling"
}
SbServerKernel: {
  label: "Kernel"
}
SbServerFeed: {
  label: "Change feed"
}
SbServerJobs: {
  label: "Jobs"
}
SbServerMNotifications: {
  label: "notifications"
}
Smtp: {
  label: "Email provider"
}
PushService: {
  label: "Browser push services"
}
ChatPlatform: {
  label: "Chat platform"
}

Organizer -> SbServerHttp: "POST /sessions/{id}/move"
SbServerHttp -> SbServerMScheduling: "move use case: booking rules, reserved windows, clash check"
SbServerMScheduling -> SbServerKernel: "record SessionMoved"
SbServerKernel -> SbServerFeed: "publish to event audience"
SbServerJobs -> SbServerMNotifications: "reaction: SessionMoved -> notifications for hosts and RSVP'd attendees"
SbServerMNotifications -> SbServerKernel: "record NotificationCreated (audience: one person each)"
SbServerJobs -> SbServerMNotifications: "delivery per bound channel with attempt log"
SbServerMNotifications -> Smtp: "email"
SbServerMNotifications -> PushService: "push"
SbServerMNotifications -> ChatPlatform: "chat message"
`;case`flowJoin`:return`direction: right

Attendee: {
  label: "Attendee"
  shape: c4-person
}
SbWebShell: {
  label: "Shell & router"
}
SbServerHttp: {
  label: "HTTP API"
}
SbServerMIdentity: {
  label: "identity"
}
SbWebReplica: {
  label: "Replica"
}
SbServerFeed: {
  label: "Change feed"
}

Attendee -> SbWebShell: "opens /join/{token} from email or QR"
SbWebShell -> SbServerHttp: "POST /auth/join {token}"
SbServerHttp -> SbServerMIdentity: "validate token, create a verified login session"
SbServerHttp -> SbWebShell: "Set-Cookie (httpOnly, SameSite=Lax) + actor context"
SbWebShell -> SbWebReplica: "load event"
SbWebReplica -> SbServerFeed: "GET snapshot, then subscribe since seq"
`;case`flowReconnect`:return`direction: right

SbWebPwa: {
  label: "PWA runtime"
}
SbWebShell: {
  label: "Shell & router"
}
SbWebReplica: {
  label: "Replica"
}
SbServerFeed: {
  label: "Change feed"
}
SbWebFeatures: {
  label: "Feature views"
}

SbWebPwa -> SbWebShell: "app opened offline: shell from precache"
SbWebShell -> SbWebReplica: "load persisted replica (seq 4120), show \\"last synced 14:02\\""
SbWebReplica -> SbServerFeed: "GET feed?since=4120"
SbServerFeed -> SbWebReplica: "changes 4121..4187, or 410 Gone if pruned → full snapshot"
SbWebReplica -> SbWebFeatures: "re-render, banner disappears"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};