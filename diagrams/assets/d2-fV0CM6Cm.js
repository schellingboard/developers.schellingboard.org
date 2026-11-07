var e=e=>{switch(e){case`index`:return`direction: down

Attendee: {
  label: "Attendee"
  shape: c4-person
}
SiteAdmin: {
  label: "Site admin"
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

Attendee -> Sb: "uses, installs on phone"
SiteAdmin -> Sb: "administers installation"
Sb -> Smtp: "sends email"
PushService -> Sb: "delivers push"
Sb -> PushService: "sends Web Push"
`;case`containers`:return`direction: right

Attendee: {
  label: "Attendee"
  shape: c4-person
}
SiteAdmin: {
  label: "Site admin"
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

Attendee -> Sb.Web: "uses, installs on phone"
SiteAdmin -> Sb.Web: "administers installation"
PushService -> Sb.Web: "delivers push"
ReverseProxy -> Sb.Server: "forwards HTTPS"
Sb.Web -> Sb.Server: "[...]"
Sb.Server -> Sb.Db: "reads and writes"
Sb.Server -> Sb.Files: "stores uploads"
Sb.Server -> Smtp: "sends email"
Sb.Server -> PushService: "sends Web Push"
`;case`server`:return`direction: down

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
  MVenue: {
    label: "venue"
  }
  MComments: {
    label: "comments"
  }
  MSettings: {
    label: "settings"
  }
  MUpdates: {
    label: "updates"
  }
  MPeople: {
    label: "people"
  }
  MNotifications: {
    label: "notifications"
  }
  MProposals: {
    label: "proposals"
  }
  MSessions: {
    label: "sessions"
  }
  MMeetings: {
    label: "meetings"
  }
  Kernel: {
    label: "Kernel"
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

SbWeb -> SbServer.Http: "commands and queries"
SbWeb -> SbServer.Feed: "snapshot, then changes since seq"
SbServer.Http -> SbServer.MPeople: "signs in, resolves the actor"
SbServer.Http -> SbServer.MProposals: "invokes use cases"
SbServer.Http -> SbServer.MSessions: "invokes use cases"
SbServer.Feed -> SbServer.Kernel: "reads change log"
SbServer.Jobs -> SbServer.MNotifications: "runs reactions and deliveries"
SbServer.MSessions -> SbServer.Kernel: "records changes"
SbServer.MMeetings -> SbServer.MEvents: "reads phases and days"
SbServer.MNotifications -> SbServer.MProposals: "reacts to"
SbServer.MNotifications -> SbServer.MSessions: "reacts to"
SbServer.MNotifications -> SbServer.MMeetings: "reacts to"
SbServer.Jobs -> Smtp: "sends email"
SbServer.Jobs -> PushService: "sends Web Push"
SbServer -> SbDb: "reads and writes"
SbServer -> SbFiles: "stores uploads"
`;case`modules`:return`direction: up

SbServerMVenue: {
  label: "venue"
}
SbServerMPeople: {
  label: "people"
}
SbServerMComments: {
  label: "comments"
}
SbServerMNotifications: {
  label: "notifications"
}
SbServerMProposals: {
  label: "proposals"
}
SbServerMSessions: {
  label: "sessions"
}
SbServerMMeetings: {
  label: "meetings"
}
SbServerMEvents: {
  label: "events"
}
SbServerMSettings: {
  label: "settings"
}
SbServerMUpdates: {
  label: "updates"
}

SbServerMMeetings -> SbServerMEvents: "reads phases and days"
SbServerMNotifications -> SbServerMProposals: "reacts to"
SbServerMNotifications -> SbServerMSessions: "reacts to"
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
SbServerMSessions: {
  label: "sessions"
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
SbWebCommands -> SbServerHttp: "PUT /sessions/{id}/rsvps/{guestId} (Idempotency-Key)"
SbServerHttp -> SbServerMSessions: "rsvp use case: check phase and capacity, write, record change"
SbServerMSessions -> SbServerKernel: "commit state + change in one transaction"
SbServerKernel -> SbServerFeed: "publish change seq N"
SbServerFeed -> SbWebReplica: "change seq N to every viewer of the event (this one matches it to the prediction by command_key)"
SbServerHttp -> SbWebCommands: "the result, with the recorded change"
`;case`flowSessionChanged`:return`direction: right

SiteAdmin: {
  label: "Site admin"
  shape: c4-person
}
SbServerHttp: {
  label: "HTTP API"
}
SbServerMSessions: {
  label: "sessions"
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

SiteAdmin -> SbServerHttp: "PUT /sessions/{id}"
SbServerHttp -> SbServerMSessions: "update use case: clash check"
SbServerMSessions -> SbServerKernel: "record session.changed"
SbServerKernel -> SbServerFeed: "publish to the event audience"
SbServerJobs -> SbServerMNotifications: "reaction: session.changed -> notifications for hosts and RSVP'd attendees"
SbServerJobs -> Smtp: "delivery: email"
SbServerJobs -> PushService: "delivery: push"
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
SbServerMPeople: {
  label: "people"
}
SbWebReplica: {
  label: "Replica"
}
SbServerFeed: {
  label: "Change feed"
}

Attendee -> SbWebShell: "opens /join/{token} from email"
SbWebShell -> SbServerHttp: "POST /auth/join {token}"
SbServerHttp -> SbServerMPeople: "validate token, create a verified login session"
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
SbServerFeed -> SbWebReplica: "changes 4121..4187, or a reset message if pruned → full snapshot"
SbWebReplica -> SbWebFeatures: "re-render, banner disappears"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};