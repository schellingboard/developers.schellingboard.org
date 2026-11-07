var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    attendee [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SchellingBoard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unconference scheduling: propose → vote →<BR/>schedule.</FONT></TD></TR></TABLE>>,
        likec4_id=sb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id="1t5r585",
        minlen=1,
        style=dashed];
    siteadmin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, guests,<BR/>events.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1ssui73",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id="1ol1yyg",
        style=dashed];
    sb -> pushservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="14z77iw",
        style=dashed];
    smtp [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb -> smtp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
        likec4_id="1x2u0dd",
        minlen=1,
        style=dashed];
}
`;case`containers`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=containers,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_sb {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHELLINGBOARD</B></FONT>>,
            likec4_depth=1,
            likec4_id=sb,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        web [group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Vite, TypeScript, PWA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Static single-page app. Holds a per-event<BR/>replica and renders every view from it.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        server [group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node, Hono, TypeScript</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One Node process: HTTP API, change feed,<BR/>background jobs. Serves the web app as static<BR/>files.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        db [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SQLite database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">SQLite, WAL mode</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">State tables plus the append-only change log.<BR/>One file to back up.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        files [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars, location images and the venue map,<BR/>re-encoded on upload.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.files",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    attendee [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id=yn1evf,
        minlen=1,
        style=dashed];
    siteadmin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, guests,<BR/>events.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1f862jl",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id=nevd52,
        style=dashed];
    reverseproxy [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reverse proxy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Terminates TLS. Not part of the app;<BR/>documented for self-hosters.</FONT></TD></TR></TABLE>>,
        likec4_id=reverseProxy,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    reverseproxy -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">forwards HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="3yshrw",
        minlen=1,
        style=dashed];
    web -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=q3w3zz,
        style=dotted,
        weight=2];
    server -> pushservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="1kl7f4j",
        style=dashed];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ SQL via ports ]</FONT></TD></TR></TABLE>>,
        likec4_id="6tid3d",
        minlen=1,
        style=dashed,
        weight=2];
    server -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores uploads</FONT></TD></TR></TABLE>>,
        likec4_id=npqs4a,
        minlen=1,
        style=dashed,
        weight=2];
    smtp [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> smtp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
        likec4_id=ayw3wq,
        minlen=1,
        style=dashed];
}
`;case`server`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=server,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_server {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SERVER</B></FONT>>,
            likec4_depth=1,
            likec4_id="sb.server",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            mvenue [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Locations (rooms, areas), their images,<BR/>colours and unavailable times.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mVenue",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mcomments [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">comments</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Comments on proposals, sessions and profiles,<BR/>and their likes.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mComments",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            msettings [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">settings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site settings.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mSettings",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mupdates [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">updates</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The daily look-up of the latest release,<BR/>shown to the admin.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mUpdates",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        http [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Gates, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.http",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        feed [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.feed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        jobs [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single leased loop: reactions to changes,<BR/>deliveries (email, push), reminders, pruning.<BR/>Idempotent.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.jobs",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mvenue -> msettings [style=invis];
        mpeople [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mPeople",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mnotifications [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push subscriptions.<BR/>Email and push delivery run in the jobs loop.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mNotifications",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mproposals [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, hosts and votes.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mProposals",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        msessions [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mSessions",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mmeetings [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>points.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mMeetings",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kernel [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.kernel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mevents [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Events, days, phases, time zone, per-event<BR/>settings including the identity mode.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mEvents",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    web [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Vite, TypeScript, PWA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Static single-page app. Holds a per-event<BR/>replica and renders every view from it.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.web",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    web -> http [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">commands and queries</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijxsbt",
        style=dashed];
    web -> feed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">snapshot, then changes since seq</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Server-Sent Events ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijzftf",
        style=dotted];
    http -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">signs in, resolves the actor</FONT></TD></TR></TABLE>>,
        likec4_id="1yqbc8s",
        minlen=1,
        style=dashed,
        weight=2];
    http -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id="8n8dy8",
        style=dashed,
        weight=2];
    http -> msessions [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id=ob23le,
        style=dashed,
        weight=2];
    feed -> kernel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads change log</FONT></TD></TR></TABLE>>,
        likec4_id=uurmur,
        style=dashed,
        weight=2];
    jobs -> mnotifications [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs reactions and deliveries</FONT></TD></TR></TABLE>>,
        likec4_id="1oa5mp9",
        style=dashed,
        weight=3];
    smtp [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobs -> smtp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
        likec4_id="1dbextc",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobs -> pushservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="1y6wjqh",
        minlen=1,
        style=dashed];
    mcomments -> mupdates [style=invis];
    db [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SQLite database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">SQLite, WAL mode</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">State tables plus the append-only change log.<BR/>One file to back up.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.db",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    files [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars, location images and the venue map,<BR/>re-encoded on upload.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.files",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        style=dashed];
    mnotifications -> msessions [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=boylcp,
        style=dashed];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
        style=dashed];
    msessions -> kernel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">records changes</FONT></TD></TR></TABLE>>,
        likec4_id=h7ayup,
        style=dashed];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases and days</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        style=dashed];
    mevents -> db [arrowhead=normal,
        likec4_id="6tid3d",
        ltail=cluster_server,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ SQL via ports ]</FONT></TD></TR></TABLE>>];
    mevents -> files [arrowhead=normal,
        likec4_id=npqs4a,
        ltail=cluster_server,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores uploads</FONT></TD></TR></TABLE>>];
}
`;case`modules`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=b,
        layout=dot,
        likec4_viewId=modules,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=BT,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    mvenue [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Locations (rooms, areas), their images,<BR/>colours and unavailable times.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mVenue",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpeople [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mPeople",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mvenue -> mpeople [style=invis];
    mcomments [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">comments</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Comments on proposals, sessions and profiles,<BR/>and their likes.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mComments",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpeople -> mcomments [style=invis];
    msettings [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">settings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site settings.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mSettings",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcomments -> msettings [style=invis];
    mnotifications [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push subscriptions.<BR/>Email and push delivery run in the jobs loop.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mNotifications",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mproposals [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, hosts and votes.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mProposals",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        minlen=1,
        style=dashed];
    msessions [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mSessions",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> msessions [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=boylcp,
        minlen=1,
        style=dashed];
    mmeetings [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>points.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mMeetings",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
        style=dashed];
    mevents [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Events, days, phases, time zone, per-event<BR/>settings including the identity mode.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mEvents",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases and days</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        minlen=1,
        style=dashed];
    mupdates [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">updates</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The daily look-up of the latest release,<BR/>shown to the admin.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mUpdates",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`web`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=web,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_web {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WEB APP</B></FONT>>,
            likec4_depth=1,
            likec4_id="sb.web",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        pwa [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PWA runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Service worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Cached shell, push notifications, kiosk<BR/>keep-awake.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.pwa",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        commands [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Commands</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every mutation: predict with a domain policy,<BR/>call the API, reconcile with the confirmed<BR/>change.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.commands",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        shell [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.shell",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        replica [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see it.<BR/>Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.replica",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        features [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, proposals, voting, people,<BR/>meetings, notifications, settings, admin.<BR/>Pure functions of replica + local UI state.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.features",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_server {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SERVER</B></FONT>>,
            likec4_depth=1,
            likec4_id="sb.server",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        http [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Gates, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.http",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        feed [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.feed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    pushservice [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> pwa [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id=n2l2em,
        minlen=1,
        style=dashed];
    pwa -> shell [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">installs, delivers push</FONT></TD></TR></TABLE>>,
        likec4_id="9m65ci",
        style=dashed,
        weight=3];
    commands -> replica [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">predicts, then reconciles</FONT></TD></TR></TABLE>>,
        likec4_id="1mgjcbi",
        style=dashed,
        weight=3];
    commands -> http [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">commands and queries</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id=kzuy4z,
        minlen=1,
        style=dashed];
    shell -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">routes to</FONT></TD></TR></TABLE>>,
        likec4_id="1h2guib",
        style=dashed];
    replica -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">renders from</FONT></TD></TR></TABLE>>,
        likec4_id=s7ncrx,
        style=dashed,
        weight=3];
    replica -> feed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">snapshot, then changes since seq</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Server-Sent Events ]</FONT></TD></TR></TABLE>>,
        likec4_id=isjrbx,
        minlen=1,
        style=dotted];
}
`;case`flowRsvp`:return`digraph {
  likec4_viewId = "flowRsvp";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "attendee" [
    likec4_id = "attendee";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "features" [
    likec4_id = "sb.web.features";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, proposals, voting, people,<BR/>meetings, notifications, settings, admin.<BR/>Pure functions of replica + local UI state.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "commands" [
    likec4_id = "sb.web.commands";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Commands</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every mutation: predict with a domain policy,<BR/>call the API, reconcile with the confirmed<BR/>change.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see it.<BR/>Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Gates, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "msessions" [
    likec4_id = "sb.server.mSessions";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "attendee" -> "features" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">taps RSVP on a session</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "features" -> "commands" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">rsvp(sessionId)</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "commands" -> "replica" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">apply predicted change (policy says<BR/>allowed, capacity not exceeded)</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "commands" -> "http" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">PUT /sessions/{id}/rsvps/{guestId}<BR/>(Idempotency-Key)<BR/>HTTPS / JSON</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "msessions" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">rsvp use case: check phase and capacity,<BR/>write, record change</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "msessions" -> "kernel" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">commit state + change in one transaction</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kernel" -> "feed" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">publish change seq N</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "replica" -> "feed" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">change seq N to every viewer of the<BR/>event (this one matches it to the<BR/>prediction by command_key)</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "commands" -> "http" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">the result, with the recorded change</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`flowSessionChanged`:return`digraph {
  likec4_viewId = "flowSessionChanged";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "siteadmin" [
    likec4_id = "siteAdmin";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, guests,<BR/>events.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Gates, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "msessions" [
    likec4_id = "sb.server.mSessions";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "jobs" [
    likec4_id = "sb.server.jobs";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single leased loop: reactions to changes,<BR/>deliveries (email, push), reminders, pruning.<BR/>Idempotent.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "mnotifications" [
    likec4_id = "sb.server.mNotifications";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push subscriptions.<BR/>Email and push delivery run in the jobs loop.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "smtp" [
    likec4_id = "smtp";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "pushservice" [
    likec4_id = "pushService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "siteadmin" -> "http" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">PUT /sessions/{id}</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "msessions" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">update use case: clash check</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "msessions" -> "kernel" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">record session.changed</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kernel" -> "feed" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">publish to the event audience</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "jobs" -> "mnotifications" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">reaction: session.changed -&gt;<BR/>notifications for hosts and RSVP'd<BR/>attendees</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "jobs" -> "smtp" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">delivery: email</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "jobs" -> "pushservice" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">delivery: push</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flowJoin`:return`digraph {
  likec4_viewId = "flowJoin";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "attendee" [
    likec4_id = "attendee";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "shell" [
    likec4_id = "sb.web.shell";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Gates, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "mpeople" [
    likec4_id = "sb.server.mPeople";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see it.<BR/>Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "attendee" -> "shell" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">opens /join/{token} from email</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shell" -> "http" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /auth/join {token}</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "mpeople" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">validate token, create a verified login<BR/>session</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shell" -> "http" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Set-Cookie (httpOnly, SameSite=Lax) +<BR/>actor context</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "shell" -> "replica" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">load event</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "replica" -> "feed" [
    likec4_id = "step-06";
    style = "dotted";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">GET snapshot, then subscribe since seq<BR/>Server-Sent Events</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flowReconnect`:return`digraph {
  likec4_viewId = "flowReconnect";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "pwa" [
    likec4_id = "sb.web.pwa";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PWA runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Service worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Cached shell, push notifications, kiosk<BR/>keep-awake.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "shell" [
    likec4_id = "sb.web.shell";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see it.<BR/>Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence number. Also<BR/>builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "features" [
    likec4_id = "sb.web.features";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, proposals, voting, people,<BR/>meetings, notifications, settings, admin.<BR/>Pure functions of replica + local UI state.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pwa" -> "shell" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">app opened offline: shell from precache</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shell" -> "replica" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">load persisted replica (seq 4120), show<BR/>"last synced 14:02"</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "replica" -> "feed" [
    likec4_id = "step-03";
    style = "dotted";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">GET feed?since=4120<BR/>Server-Sent Events</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "replica" -> "feed" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">changes 4121..4187, or a reset message<BR/>if pruned → full snapshot</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "replica" -> "features" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">re-render, banner disappears</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="822pt" height="856pt"
 viewBox="0.00 0.00 822.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-825.6 0,-825.6 0,-645.6 361.12,-645.6 361.12,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="101.77" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- sb -->
<g id="node2" class="node">
<title>sb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="574.45,-502.8 236.66,-502.8 236.66,-322.8 574.45,-322.8 574.45,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="338.29" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SchellingBoard</text>
<text xml:space="preserve" text-anchor="start" x="256.72" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unconference scheduling: propose → vote →</text>
<text xml:space="preserve" text-anchor="start" x="373.45" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">schedule.</text>
</g>
<!-- siteadmin -->
<g id="node3" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="791.58,-825.6 471.54,-825.6 471.54,-645.6 791.58,-645.6 791.58,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="584.31" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="491.9" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="607.38" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- pushservice -->
<g id="node4" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="338.58,-180 18.54,-180 18.54,0 338.58,0 338.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="77.97" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="38.89" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="149.79" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- smtp -->
<g id="node5" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="768.58,-180 448.54,-180 448.54,0 768.58,0 768.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="544.65" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="552.29" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- attendee&#45;&gt;sb -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M242.94,-645.67C272.26,-603.86 307.29,-553.91 337.32,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="339.36,-512.76 341.52,-505.11 335.06,-509.74 339.36,-512.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="299.81,-562.8 299.81,-585.6 448.23,-585.6 448.23,-562.8 299.81,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="302.81" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- sb&#45;&gt;pushservice -->
<g id="edge4" class="edge">
<title>sb&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M236.78,-345.5C203.22,-324.27 172.32,-297.08 152.72,-262.8 140.23,-240.93 138.63,-215.06 142.16,-190.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="144.72,-190.68 143.38,-182.85 139.55,-189.81 144.72,-190.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="152.72,-240 152.72,-262.8 264.56,-262.8 264.56,-240 152.72,-240"/>
<text xml:space="preserve" text-anchor="start" x="155.72" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- sb&#45;&gt;smtp -->
<g id="edge5" class="edge">
<title>sb&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.84,-322.87C488.24,-281.14 519.77,-231.31 546.82,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="548.94,-190.13 550.73,-182.39 544.5,-187.32 548.94,-190.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="513.15,-240 513.15,-262.8 593.85,-262.8 593.85,-240 513.15,-240"/>
<text xml:space="preserve" text-anchor="start" x="516.15" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- siteadmin&#45;&gt;sb -->
<g id="edge2" class="edge">
<title>siteadmin&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M568.91,-645.67C539.45,-603.86 504.26,-553.91 474.1,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="476.35,-509.72 469.88,-505.1 472.06,-512.75 476.35,-509.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="525.34,-562.8 525.34,-585.6 672.96,-585.6 672.96,-562.8 525.34,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="528.34" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- pushservice&#45;&gt;sb -->
<g id="edge3" class="edge">
<title>pushservice&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M247.31,-179.75C262.14,-199.42 277.56,-220.28 291.56,-240 308.52,-263.89 326.29,-290.07 342.61,-314.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="340.32,-315.91 346.65,-320.71 344.69,-313.01 340.32,-315.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="304.41,-240 304.41,-262.8 392.9,-262.8 392.9,-240 304.41,-240"/>
<text xml:space="preserve" text-anchor="start" x="307.41" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
</g>
</svg>
`;case`containers`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2184pt" height="1080pt"
 viewBox="0.00 0.00 2184.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<g id="clust1" class="cluster">
<title>cluster_sb</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="589.54,-250 589.54,-821 2145.67,-821 2145.67,-250 589.54,-250"/>
<text xml:space="preserve" text-anchor="start" x="597.54" y="-808.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHELLINGBOARD</text>
</g>
<!-- web -->
<g id="node1" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="949.58,-666 629.54,-666 629.54,-486 949.58,-486 949.58,-666"/>
<text xml:space="preserve" text-anchor="start" x="749.54" y="-597.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="704.68" y="-576.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="651.98" y="-555.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="662.85" y="-537.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1529.34,-666 1179.05,-666 1179.05,-486 1529.34,-486 1529.34,-666"/>
<text xml:space="preserve" text-anchor="start" x="1324.74" y="-606.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Server</text>
<text xml:space="preserve" text-anchor="start" x="1284.83" y="-585.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node, Hono, TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1206.2" y="-564.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One Node process: HTTP API, change feed,</text>
<text xml:space="preserve" text-anchor="start" x="1199.1" y="-546.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">background jobs. Serves the web app as static</text>
<text xml:space="preserve" text-anchor="start" x="1338.77" y="-528.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">files.</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2105.67,-453.64C2105.67,-462.67 2028.47,-470 1933.42,-470 1838.38,-470 1761.17,-462.67 1761.17,-453.64 1761.17,-453.64 1761.17,-306.36 1761.17,-306.36 1761.17,-297.33 1838.38,-290 1933.42,-290 2028.47,-290 2105.67,-297.33 2105.67,-306.36 2105.67,-306.36 2105.67,-453.64 2105.67,-453.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2105.67,-453.64C2105.67,-444.61 2028.47,-437.27 1933.42,-437.27 1838.38,-437.27 1761.17,-444.61 1761.17,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1858.93" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="1877.79" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="1781.23" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change log.</text>
<text xml:space="preserve" text-anchor="start" x="1868.8" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One file to back up.</text>
</g>
<!-- files -->
<g id="node4" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2103.57,-743.64C2103.57,-752.67 2027.31,-760 1933.42,-760 1839.54,-760 1763.28,-752.67 1763.28,-743.64 1763.28,-743.64 1763.28,-596.36 1763.28,-596.36 1763.28,-587.33 1839.54,-580 1933.42,-580 2027.31,-580 2103.57,-587.33 2103.57,-596.36 2103.57,-596.36 2103.57,-743.64 2103.57,-743.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2103.57,-743.64C2103.57,-734.61 2027.31,-727.27 1933.42,-727.27 1839.54,-727.27 1763.28,-734.61 1763.28,-743.64"/>
<text xml:space="preserve" text-anchor="start" x="1892.3" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="1885.02" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="1783.33" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars, location images and the venue map,</text>
<text xml:space="preserve" text-anchor="start" x="1858.36" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">re&#45;encoded on upload.</text>
</g>
<!-- attendee -->
<g id="node5" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-811 0,-811 0,-631 361.12,-631 361.12,-811"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-733" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-710" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="101.77" y="-692" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- siteadmin -->
<g id="node6" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="340.58,-521 20.54,-521 20.54,-341 340.58,-341 340.58,-521"/>
<text xml:space="preserve" text-anchor="start" x="133.31" y="-443" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="40.9" y="-420" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="156.38" y="-402" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- pushservice -->
<g id="node7" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2093.44,-180 1773.4,-180 1773.4,0 2093.44,0 2093.44,-180"/>
<text xml:space="preserve" text-anchor="start" x="1832.83" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="1793.76" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="1904.66" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- reverseproxy -->
<g id="node8" class="node">
<title>reverseproxy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="949.58,-1041 629.54,-1041 629.54,-861 949.58,-861 949.58,-1041"/>
<text xml:space="preserve" text-anchor="start" x="725.1" y="-963" font-family="Arial" font-size="20.00" fill="#f8fafc">Reverse proxy</text>
<text xml:space="preserve" text-anchor="start" x="667.84" y="-940" font-family="Arial" font-size="15.00" fill="#cbd5e1">Terminates TLS. Not part of the app;</text>
<text xml:space="preserve" text-anchor="start" x="694.52" y="-922" font-family="Arial" font-size="15.00" fill="#cbd5e1">documented for self&#45;hosters.</text>
</g>
<!-- smtp -->
<g id="node9" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2093.44,-1050 1773.4,-1050 1773.4,-870 2093.44,-870 2093.44,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1869.51" y="-963" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="1877.16" y="-940" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- web&#45;&gt;server -->
<g id="edge5" class="edge">
<title>web&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M949.54,-576C1017.83,-576 1098.07,-576 1168.94,-576"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1168.8,-578.63 1176.3,-576 1168.8,-573.38 1168.8,-578.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1050.82,-576 1050.82,-598.8 1077.81,-598.8 1077.81,-576 1050.82,-576"/>
<text xml:space="preserve" text-anchor="start" x="1053.82" y="-584.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge7" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1529.16,-516.93C1599.07,-493.19 1679.7,-465.81 1750.39,-441.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1751.18,-444.32 1757.43,-439.42 1749.49,-439.34 1751.18,-444.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1590.9,-495.56 1590.9,-538.76 1699.61,-538.76 1699.61,-495.56 1590.9,-495.56"/>
<text xml:space="preserve" text-anchor="start" x="1593.9" y="-521.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="1593.9" y="-500.96" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- server&#45;&gt;files -->
<g id="edge8" class="edge">
<title>server&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1529.16,-604.33C1599.71,-615.82 1681.16,-629.08 1752.31,-640.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1751.47,-643.19 1759.3,-641.81 1752.31,-638.01 1751.47,-643.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1596.73,-631.42 1596.73,-654.22 1693.78,-654.22 1693.78,-631.42 1596.73,-631.42"/>
<text xml:space="preserve" text-anchor="start" x="1599.73" y="-637.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- server&#45;&gt;pushservice -->
<g id="edge6" class="edge">
<title>server&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1455.22,-486.3C1536.59,-413.99 1654.93,-310.33 1761.17,-223 1775.91,-210.89 1791.52,-198.36 1807.08,-186.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1808.57,-188.23 1812.83,-181.52 1805.32,-184.1 1808.57,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1589.34,-366.21 1589.34,-389.01 1701.17,-389.01 1701.17,-366.21 1589.34,-366.21"/>
<text xml:space="preserve" text-anchor="start" x="1592.34" y="-372.01" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- server&#45;&gt;smtp -->
<g id="edge9" class="edge">
<title>server&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1488.42,-665.8C1567.54,-718.99 1669.91,-787.59 1761.17,-848 1769.39,-853.44 1777.84,-859.02 1786.38,-864.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1784.7,-866.68 1792.41,-868.61 1787.58,-862.29 1784.7,-866.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1604.9,-803.77 1604.9,-826.57 1685.61,-826.57 1685.61,-803.77 1604.9,-803.77"/>
<text xml:space="preserve" text-anchor="start" x="1607.9" y="-809.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- attendee&#45;&gt;web -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.81,-678.18C442.79,-658.6 539.39,-635.52 620.03,-616.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="620.16,-618.93 626.84,-614.63 618.94,-613.82 620.16,-618.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="421.12,-661.49 421.12,-684.29 569.54,-684.29 569.54,-661.49 421.12,-661.49"/>
<text xml:space="preserve" text-anchor="start" x="424.12" y="-667.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- siteadmin&#45;&gt;web -->
<g id="edge2" class="edge">
<title>siteadmin&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M340.25,-468.91C426.16,-489.43 532.29,-514.78 619.72,-535.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="618.9,-538.17 626.8,-537.36 620.12,-533.06 618.9,-538.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="421.52,-520.75 421.52,-543.55 569.14,-543.55 569.14,-520.75 421.52,-520.75"/>
<text xml:space="preserve" text-anchor="start" x="424.52" y="-526.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- pushservice&#45;&gt;web -->
<g id="edge3" class="edge">
<title>pushservice&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1773.53,-156.67C1620.95,-220.8 1384.04,-320.64 1179.05,-408.2 1106.78,-439.07 1027.07,-473.44 958.77,-502.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="957.83,-500.54 951.99,-505.93 959.91,-505.36 957.83,-500.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1309.95,-408.2 1309.95,-431 1398.44,-431 1398.44,-408.2 1309.95,-408.2"/>
<text xml:space="preserve" text-anchor="start" x="1312.95" y="-414" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
<!-- reverseproxy&#45;&gt;server -->
<g id="edge4" class="edge">
<title>reverseproxy&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M929.43,-861.27C936.25,-856.79 943,-852.35 949.58,-848 1037.5,-789.91 1135.54,-723.87 1212.97,-671.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1214.11,-673.81 1218.85,-667.43 1211.17,-669.46 1214.11,-673.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1009.58,-803.95 1009.58,-826.75 1119.05,-826.75 1119.05,-803.95 1009.58,-803.95"/>
<text xml:space="preserve" text-anchor="start" x="1012.58" y="-809.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards HTTPS</text>
</g>
</g>
</svg>
`;case`server`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3317pt" height="1852pt"
 viewBox="0.00 0.00 3317.00 1852.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1837.25)">
<g id="clust1" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-261 8,-1531 2467,-1531 2467,-261 8,-261"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1518.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- mvenue -->
<g id="node1" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1469.8 47.98,-1469.8 47.98,-1289.8 368.02,-1289.8 368.02,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="180.75" y="-1391.8" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="77.95" y="-1368.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Locations (rooms, areas), their images,</text>
<text xml:space="preserve" text-anchor="start" x="107.11" y="-1350.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">colours and unavailable times.</text>
</g>
<!-- mcomments -->
<g id="node2" class="node">
<title>mcomments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="833.63,-1469.8 478.37,-1469.8 478.37,-1289.8 833.63,-1289.8 833.63,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="609.88" y="-1391.8" font-family="Arial" font-size="20.00" fill="#eff6ff">comments</text>
<text xml:space="preserve" text-anchor="start" x="498.42" y="-1368.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Comments on proposals, sessions and profiles,</text>
<text xml:space="preserve" text-anchor="start" x="607.64" y="-1350.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">and their likes.</text>
</g>
<!-- msettings -->
<g id="node3" class="node">
<title>msettings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1147 47.98,-1147 47.98,-967 368.02,-967 368.02,-1147"/>
<text xml:space="preserve" text-anchor="start" x="173.54" y="-1060" font-family="Arial" font-size="20.00" fill="#eff6ff">settings</text>
<text xml:space="preserve" text-anchor="start" x="165.06" y="-1037" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site settings.</text>
</g>
<!-- mupdates -->
<g id="node4" class="node">
<title>mupdates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1147 477.98,-1147 477.98,-967 798.02,-967 798.02,-1147"/>
<text xml:space="preserve" text-anchor="start" x="602.41" y="-1069" font-family="Arial" font-size="20.00" fill="#eff6ff">updates</text>
<text xml:space="preserve" text-anchor="start" x="511.26" y="-1046" font-family="Arial" font-size="15.00" fill="#bfdbfe">The daily look&#45;up of the latest release,</text>
<text xml:space="preserve" text-anchor="start" x="570.88" y="-1028" font-family="Arial" font-size="15.00" fill="#bfdbfe">shown to the admin.</text>
</g>
<!-- http -->
<g id="node5" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1766.98,-1469.8 1415.02,-1469.8 1415.02,-1289.8 1766.98,-1289.8 1766.98,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="1546" y="-1410.6" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1553.78" y="-1389.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1435.07" y="-1368" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1461.36" y="-1350" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Gates, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1515.97" y="-1332" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node6" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1304.57,-1469.8 943.43,-1469.8 943.43,-1289.8 1304.57,-1289.8 1304.57,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="1066.73" y="-1410.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1110.99" y="-1389.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="989.78" y="-1368" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="963.49" y="-1350" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="1066.05" y="-1332" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node7" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2408.95,-1469.8 2077.05,-1469.8 2077.05,-1289.8 2408.95,-1289.8 2408.95,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="2221.88" y="-1400.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="2106.24" y="-1377.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single leased loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="2097.11" y="-1359.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">deliveries (email, push), reminders, pruning.</text>
<text xml:space="preserve" text-anchor="start" x="2203.39" y="-1341.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Idempotent.</text>
</g>
<!-- mpeople -->
<g id="node8" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1137.02,-803.8 816.98,-803.8 816.98,-623.8 1137.02,-623.8 1137.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="946.97" y="-725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="838.61" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="846.94" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- mnotifications -->
<g id="node9" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2427.23,-1147 2092.77,-1147 2092.77,-967 2427.23,-967 2427.23,-1147"/>
<text xml:space="preserve" text-anchor="start" x="2207.19" y="-1069" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="2116.16" y="-1046" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push subscriptions.</text>
<text xml:space="preserve" text-anchor="start" x="2112.83" y="-1028" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email and push delivery run in the jobs loop.</text>
</g>
<!-- mproposals -->
<g id="node10" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1567.02,-803.8 1246.98,-803.8 1246.98,-623.8 1567.02,-623.8 1567.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="1363.64" y="-716.8" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="1314.86" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, hosts and votes.</text>
</g>
<!-- msessions -->
<g id="node11" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1997.02,-803.8 1676.98,-803.8 1676.98,-623.8 1997.02,-623.8 1997.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="1798.09" y="-725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="1709.86" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="1781.54" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- mmeetings -->
<g id="node12" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2427.02,-803.8 2106.98,-803.8 2106.98,-623.8 2427.02,-623.8 2427.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="2226.42" y="-725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="2144.85" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="2244.9" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">points.</text>
</g>
<!-- kernel -->
<g id="node13" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="869.87,-481 542.13,-481 542.13,-301 869.87,-301 869.87,-481"/>
<text xml:space="preserve" text-anchor="start" x="677.09" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="562.18" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="576.36" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- mevents -->
<g id="node14" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2426.88,-481 2099.12,-481 2099.12,-301 2426.88,-301 2426.88,-481"/>
<text xml:space="preserve" text-anchor="start" x="2233.54" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="2119.17" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Events, days, phases, time zone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="2144.18" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings including the identity mode.</text>
</g>
<!-- web -->
<g id="node15" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1517.02,-1822.2 1196.98,-1822.2 1196.98,-1642.2 1517.02,-1642.2 1517.02,-1822.2"/>
<text xml:space="preserve" text-anchor="start" x="1316.98" y="-1754" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="1272.11" y="-1733" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="1219.42" y="-1711.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1230.28" y="-1693.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- smtp -->
<g id="node16" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2857.02,-1147 2536.98,-1147 2536.98,-967 2857.02,-967 2857.02,-1147"/>
<text xml:space="preserve" text-anchor="start" x="2633.09" y="-1060" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="2640.74" y="-1037" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node17" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3287.02,-1147 2966.98,-1147 2966.98,-967 3287.02,-967 3287.02,-1147"/>
<text xml:space="preserve" text-anchor="start" x="3026.41" y="-1069" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="2987.33" y="-1046" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="3098.23" y="-1028" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- db -->
<g id="node18" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2209.25,-163.64C2209.25,-172.67 2132.04,-180 2037,-180 1941.96,-180 1864.75,-172.67 1864.75,-163.64 1864.75,-163.64 1864.75,-16.36 1864.75,-16.36 1864.75,-7.33 1941.96,0 2037,0 2132.04,0 2209.25,-7.33 2209.25,-16.36 2209.25,-16.36 2209.25,-163.64 2209.25,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2209.25,-163.64C2209.25,-154.61 2132.04,-147.27 2037,-147.27 1941.96,-147.27 1864.75,-154.61 1864.75,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1962.5" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="1981.37" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="1884.81" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change log.</text>
<text xml:space="preserve" text-anchor="start" x="1972.38" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One file to back up.</text>
</g>
<!-- files -->
<g id="node19" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2659.14,-163.64C2659.14,-172.67 2582.88,-180 2489,-180 2395.12,-180 2318.86,-172.67 2318.86,-163.64 2318.86,-163.64 2318.86,-16.36 2318.86,-16.36 2318.86,-7.33 2395.12,0 2489,0 2582.88,0 2659.14,-7.33 2659.14,-16.36 2659.14,-16.36 2659.14,-163.64 2659.14,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2659.14,-163.64C2659.14,-154.61 2582.88,-147.27 2489,-147.27 2395.12,-147.27 2318.86,-154.61 2318.86,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="2447.88" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="2440.6" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="2338.91" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars, location images and the venue map,</text>
<text xml:space="preserve" text-anchor="start" x="2413.94" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">re&#45;encoded on upload.</text>
</g>
<!-- mvenue&#45;&gt;msettings -->
<!-- mcomments&#45;&gt;mupdates -->
<!-- http&#45;&gt;mpeople -->
<g id="edge4" class="edge">
<title>http&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1452.12,-1289.99C1395.18,-1250.04 1330.71,-1199.97 1279.26,-1147 1179.13,-1043.92 1088.18,-904.8 1032.78,-812.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1035.18,-811.47 1029.08,-806.38 1030.68,-814.17 1035.18,-811.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1279.26,-1045.6 1279.26,-1068.4 1451,-1068.4 1451,-1045.6 1279.26,-1045.6"/>
<text xml:space="preserve" text-anchor="start" x="1282.26" y="-1051.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">signs in, resolves the actor</text>
</g>
<!-- http&#45;&gt;mproposals -->
<g id="edge5" class="edge">
<title>http&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1566.38,-1289.94C1532.07,-1166.12 1470.08,-942.43 1434.36,-813.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1436.97,-813.11 1432.43,-806.58 1431.91,-814.51 1436.97,-813.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1526.23,-1045.6 1526.23,-1068.4 1646.62,-1068.4 1646.62,-1045.6 1526.23,-1045.6"/>
<text xml:space="preserve" text-anchor="start" x="1529.23" y="-1051.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge6" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1659.66,-1290.06C1725.04,-1199.51 1818.92,-1052.07 1857,-907 1864.84,-877.12 1864.46,-843.86 1860.74,-813.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1863.38,-813.44 1859.77,-806.36 1858.18,-814.15 1863.38,-813.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1837.54,-1045.6 1837.54,-1068.4 1957.93,-1068.4 1957.93,-1045.6 1837.54,-1045.6"/>
<text xml:space="preserve" text-anchor="start" x="1840.54" y="-1051.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- feed&#45;&gt;kernel -->
<g id="edge7" class="edge">
<title>feed&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.15,-1289.97C967.54,-1141.96 780.95,-855.94 762,-803.8 724.81,-701.43 712,-576.61 707.76,-491.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="710.39,-491.34 707.41,-483.97 705.14,-491.59 710.39,-491.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="818.42,-874 818.42,-896.8 931.83,-896.8 931.83,-874 818.42,-874"/>
<text xml:space="preserve" text-anchor="start" x="821.42" y="-879.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads change log</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge8" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2247.71,-1289.87C2249.9,-1248.67 2252.5,-1199.56 2254.74,-1157.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2257.36,-1157.48 2255.13,-1149.85 2252.11,-1157.2 2257.36,-1157.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2252.01,-1207 2252.01,-1229.8 2436.22,-1229.8 2436.22,-1207 2252.01,-1207"/>
<text xml:space="preserve" text-anchor="start" x="2255.01" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs reactions and deliveries</text>
</g>
<!-- jobs&#45;&gt;smtp -->
<g id="edge9" class="edge">
<title>jobs&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2375.89,-1289.98C2404.75,-1270.37 2435.01,-1249.54 2463,-1229.8 2497.79,-1205.26 2535.1,-1178.21 2569.48,-1152.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2570.76,-1155.29 2575.25,-1148.73 2567.65,-1151.06 2570.76,-1155.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2488.67,-1207 2488.67,-1229.8 2569.37,-1229.8 2569.37,-1207 2488.67,-1207"/>
<text xml:space="preserve" text-anchor="start" x="2491.67" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- jobs&#45;&gt;pushservice -->
<g id="edge10" class="edge">
<title>jobs&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2408.94,-1324.33C2544.91,-1278.98 2741.93,-1211.6 2912,-1147 2926.86,-1141.36 2942.22,-1135.35 2957.59,-1129.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2958.36,-1131.74 2964.35,-1126.51 2956.41,-1126.86 2958.36,-1131.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2747.96,-1207 2747.96,-1229.8 2859.8,-1229.8 2859.8,-1207 2747.96,-1207"/>
<text xml:space="preserve" text-anchor="start" x="2750.96" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge12" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2092.8,-990.75C1963.93,-940.26 1781.4,-868.29 1622,-803.8 1607.19,-797.81 1591.83,-791.54 1576.43,-785.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1577.59,-782.87 1569.65,-782.45 1575.59,-787.73 1577.59,-782.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1867.13,-863.8 1867.13,-907 1945.18,-907 1945.18,-863.8 1867.13,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="1870.13" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1870.13" y="-869.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;msessions -->
<g id="edge13" class="edge">
<title>mnotifications&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2149.69,-967.02C2089.95,-918.84 2016.12,-859.28 1955.2,-810.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1956.92,-808.16 1949.43,-805.49 1953.62,-812.24 1956.92,-808.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2073.83,-863.8 2073.83,-907 2151.88,-907 2151.88,-863.8 2073.83,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="2076.83" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="2076.83" y="-869.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge14" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2261.82,-967.24C2262.78,-920.34 2263.97,-862.61 2264.96,-814.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2267.58,-814.28 2265.11,-806.73 2262.34,-814.17 2267.58,-814.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2263.92,-863.8 2263.92,-907 2341.97,-907 2341.97,-863.8 2263.92,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="2266.92" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="2266.92" y="-869.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge15" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1677.12,-643.65C1658.67,-636.56 1640.02,-629.78 1622,-623.8 1368.01,-539.58 1065.78,-468.58 879.92,-428.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="880.63,-425.6 872.74,-426.58 879.51,-430.74 880.63,-425.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1424.15,-541 1424.15,-563.8 1533.66,-563.8 1533.66,-541 1424.15,-541"/>
<text xml:space="preserve" text-anchor="start" x="1427.15" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">records changes</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge16" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2265.89,-623.87C2265.38,-582.67 2264.77,-533.56 2264.24,-491.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2266.86,-491.32 2264.15,-483.86 2261.61,-491.39 2266.86,-491.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2265.12,-541 2265.12,-563.8 2415.88,-563.8 2415.88,-541 2265.12,-541"/>
<text xml:space="preserve" text-anchor="start" x="2268.12" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases and days</text>
</g>
<!-- mevents&#45;&gt;db -->
<g id="edge17" class="edge">
<title>mevents&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2165.5,-261C2147.24,-236.86 2128.44,-211.98 2111.05,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2113.36,-187.67 2106.74,-183.26 2109.17,-190.83 2113.36,-187.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2026.45,-220.87 2026.45,-264.07 2135.17,-264.07 2135.17,-220.87 2026.45,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="2029.45" y="-247.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="2029.45" y="-226.27" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- mevents&#45;&gt;files -->
<g id="edge18" class="edge">
<title>mevents&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2360.5,-261C2378.76,-236.86 2397.56,-211.98 2414.95,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2416.83,-190.83 2419.26,-183.26 2412.64,-187.67 2416.83,-190.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2293.78,-220.87 2293.78,-243.67 2390.83,-243.67 2390.83,-220.87 2293.78,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="2296.78" y="-226.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- web&#45;&gt;http -->
<g id="edge2" class="edge">
<title>web&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1416.35,-1642.33C1449.83,-1592.2 1491.7,-1529.5 1526.05,-1478.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1528.05,-1479.79 1530.03,-1472.1 1523.68,-1476.88 1528.05,-1479.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1481.02,-1539 1481.02,-1582.2 1632.54,-1582.2 1632.54,-1539 1481.02,-1539"/>
<text xml:space="preserve" text-anchor="start" x="1484.02" y="-1565.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1484.02" y="-1544.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- web&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>web&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1251.98,-1642.3C1233.86,-1623.71 1216.35,-1603.31 1202.3,-1582.2 1181.49,-1550.95 1164.98,-1513.35 1152.59,-1479.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1155.2,-1478.63 1150.22,-1472.44 1150.25,-1480.39 1155.2,-1478.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1202.3,-1539 1202.3,-1582.2 1420,-1582.2 1420,-1539 1202.3,-1539"/>
<text xml:space="preserve" text-anchor="start" x="1205.3" y="-1565.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="1205.3" y="-1544.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
</g>
</g>
</svg>
`;case`modules`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1665pt" height="1177pt"
 viewBox="0.00 0.00 1665.00 1177.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1162.05)">
<!-- mvenue -->
<g id="node1" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="337.65,-180 17.61,-180 17.61,0 337.65,0 337.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="150.39" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="47.58" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Locations (rooms, areas), their images,</text>
<text xml:space="preserve" text-anchor="start" x="76.74" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">colours and unavailable times.</text>
</g>
<!-- mpeople -->
<g id="node2" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="337.65,-523.2 17.61,-523.2 17.61,-343.2 337.65,-343.2 337.65,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="147.6" y="-445.2" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="39.24" y="-422.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="47.58" y="-404.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- mcomments -->
<g id="node3" class="node">
<title>mcomments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="355.27,-846 0,-846 0,-666 355.27,-666 355.27,-846"/>
<text xml:space="preserve" text-anchor="start" x="131.51" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">comments</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">Comments on proposals, sessions and profiles,</text>
<text xml:space="preserve" text-anchor="start" x="129.27" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">and their likes.</text>
</g>
<!-- msettings -->
<g id="node4" class="node">
<title>msettings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="337.65,-1147 17.61,-1147 17.61,-967 337.65,-967 337.65,-1147"/>
<text xml:space="preserve" text-anchor="start" x="143.17" y="-1060" font-family="Arial" font-size="20.00" fill="#eff6ff">settings</text>
<text xml:space="preserve" text-anchor="start" x="134.69" y="-1037" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site settings.</text>
</g>
<!-- mnotifications -->
<g id="node5" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1204.86,-180 870.41,-180 870.41,0 1204.86,0 1204.86,-180"/>
<text xml:space="preserve" text-anchor="start" x="984.83" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="893.8" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push subscriptions.</text>
<text xml:space="preserve" text-anchor="start" x="890.46" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email and push delivery run in the jobs loop.</text>
</g>
<!-- mproposals -->
<g id="node6" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="767.65,-523.2 447.61,-523.2 447.61,-343.2 767.65,-343.2 767.65,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="564.27" y="-436.2" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="515.5" y="-413.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, hosts and votes.</text>
</g>
<!-- msessions -->
<g id="node7" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1197.65,-523.2 877.61,-523.2 877.61,-343.2 1197.65,-343.2 1197.65,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="998.73" y="-445.2" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="910.5" y="-422.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="982.17" y="-404.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- mmeetings -->
<g id="node8" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1627.65,-523.2 1307.61,-523.2 1307.61,-343.2 1627.65,-343.2 1627.65,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="1427.06" y="-445.2" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="1345.49" y="-422.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="1445.54" y="-404.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">points.</text>
</g>
<!-- mevents -->
<g id="node9" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1631.51,-846 1303.75,-846 1303.75,-666 1631.51,-666 1631.51,-846"/>
<text xml:space="preserve" text-anchor="start" x="1438.17" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="1323.81" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">Events, days, phases, time zone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1348.81" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings including the identity mode.</text>
</g>
<!-- mupdates -->
<g id="node10" class="node">
<title>mupdates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1634.65,-180 1314.61,-180 1314.61,0 1634.65,0 1634.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="1439.05" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">updates</text>
<text xml:space="preserve" text-anchor="start" x="1347.89" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">The daily look&#45;up of the latest release,</text>
<text xml:space="preserve" text-anchor="start" x="1407.51" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">shown to the admin.</text>
</g>
<!-- mvenue&#45;&gt;mpeople -->
<!-- mpeople&#45;&gt;mcomments -->
<!-- mcomments&#45;&gt;msettings -->
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge4" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M925.5,-179.98C864.65,-228.26 789.41,-287.96 727.41,-337.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="726.15,-334.81 721.9,-341.53 729.41,-338.92 726.15,-334.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="848.38,-240 848.38,-283.2 926.43,-283.2 926.43,-240 848.38,-240"/>
<text xml:space="preserve" text-anchor="start" x="851.38" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="851.38" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;msessions -->
<g id="edge5" class="edge">
<title>mnotifications&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1037.63,-179.76C1037.63,-226.66 1037.63,-284.39 1037.63,-332.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1035.01,-332.77 1037.63,-340.27 1040.26,-332.77 1035.01,-332.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1037.63,-240 1037.63,-283.2 1115.69,-283.2 1115.69,-240 1037.63,-240"/>
<text xml:space="preserve" text-anchor="start" x="1040.63" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1040.63" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge6" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1149.77,-179.98C1210.62,-228.26 1285.85,-287.96 1347.85,-337.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1345.85,-338.92 1353.36,-341.53 1349.12,-334.81 1345.85,-338.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1278.38,-240 1278.38,-283.2 1356.43,-283.2 1356.43,-240 1278.38,-240"/>
<text xml:space="preserve" text-anchor="start" x="1281.38" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1281.38" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge7" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1467.63,-523.13C1467.63,-564.33 1467.63,-613.44 1467.63,-655.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1465.01,-655.64 1467.63,-663.14 1470.26,-655.64 1465.01,-655.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1467.63,-583.2 1467.63,-606 1618.4,-606 1618.4,-583.2 1467.63,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="1470.63" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases and days</text>
</g>
</g>
</svg>
`;case`web`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1818pt" height="1265pt"
 viewBox="0.00 0.00 1818.00 1265.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1250.25)">
<g id="clust1" class="cluster">
<title>cluster_web</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-964.4 854,-964.4 854,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-951.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WEB APP</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="876,-8 876,-289.2 1780,-289.2 1780,-8 876,-8"/>
<text xml:space="preserve" text-anchor="start" x="884" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- pwa -->
<g id="node1" class="node">
<title>pwa</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-903.2 47.98,-903.2 47.98,-723.2 368.02,-723.2 368.02,-903.2"/>
<text xml:space="preserve" text-anchor="start" x="149.1" y="-835" font-family="Arial" font-size="20.00" fill="#eff6ff">PWA runtime</text>
<text xml:space="preserve" text-anchor="start" x="165.02" y="-814" font-family="Arial" font-size="13.00" fill="#bfdbfe">Service worker</text>
<text xml:space="preserve" text-anchor="start" x="81.27" y="-792.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Cached shell, push notifications, kiosk</text>
<text xml:space="preserve" text-anchor="start" x="165.48" y="-774.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">keep&#45;awake.</text>
</g>
<!-- commands -->
<g id="node2" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="814.46,-903.2 477.54,-903.2 477.54,-723.2 814.46,-723.2 814.46,-903.2"/>
<text xml:space="preserve" text-anchor="start" x="594.87" y="-834.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="497.6" y="-811.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain policy,</text>
<text xml:space="preserve" text-anchor="start" x="510.94" y="-793.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">call the API, reconcile with the confirmed</text>
<text xml:space="preserve" text-anchor="start" x="619.31" y="-775.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">change.</text>
</g>
<!-- shell -->
<g id="node3" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-580.4 47.98,-580.4 47.98,-400.4 368.02,-400.4 368.02,-580.4"/>
<text xml:space="preserve" text-anchor="start" x="147.41" y="-502.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="69.58" y="-479.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="128.37" y="-461.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- replica -->
<g id="node4" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="811.55,-580.4 480.45,-580.4 480.45,-400.4 811.55,-400.4 811.55,-580.4"/>
<text xml:space="preserve" text-anchor="start" x="612.65" y="-511.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="500.51" y="-488.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see it.</text>
<text xml:space="preserve" text-anchor="start" x="521.95" y="-470.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="606.81" y="-452.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="806.02,-228 485.98,-228 485.98,-48 806.02,-48 806.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="583.75" y="-159" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="525.08" y="-136" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="515.1" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="511.56" y="-100" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
</g>
<!-- http -->
<g id="node6" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1739.98,-228 1388.02,-228 1388.02,-48 1739.98,-48 1739.98,-228"/>
<text xml:space="preserve" text-anchor="start" x="1519" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1526.78" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1408.07" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1434.36" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Gates, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1488.97" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node7" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1277.57,-228 916.43,-228 916.43,-48 1277.57,-48 1277.57,-228"/>
<text xml:space="preserve" text-anchor="start" x="1039.73" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1083.99" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="962.78" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="936.49" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="1039.05" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- pushservice -->
<g id="node8" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="368.02,-1235.2 47.98,-1235.2 47.98,-1055.2 368.02,-1055.2 368.02,-1235.2"/>
<text xml:space="preserve" text-anchor="start" x="107.41" y="-1157.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="68.33" y="-1134.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="179.23" y="-1116.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- pwa&#45;&gt;shell -->
<g id="edge2" class="edge">
<title>pwa&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-723.27C208,-682.07 208,-632.96 208,-590.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-590.76 208,-583.26 205.38,-590.76 210.63,-590.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-640.4 208,-663.2 347.06,-663.2 347.06,-640.4 208,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-646.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">installs, delivers push</text>
</g>
<!-- commands&#45;&gt;replica -->
<g id="edge3" class="edge">
<title>commands&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M646,-723.27C646,-682.07 646,-632.96 646,-590.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="648.63,-590.76 646,-583.26 643.38,-590.76 648.63,-590.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="646,-640.4 646,-663.2 802.96,-663.2 802.96,-640.4 646,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="649" y="-646.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">predicts, then reconciles</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M766.96,-723.5C939.97,-596.62 1256.77,-364.3 1434.42,-234.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1435.84,-236.24 1440.33,-229.69 1432.73,-232.01 1435.84,-236.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1196.26,-468.8 1196.26,-512 1347.78,-512 1347.78,-468.8 1196.26,-468.8"/>
<text xml:space="preserve" text-anchor="start" x="1199.26" y="-495" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1199.26" y="-474.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- shell&#45;&gt;features -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.09,-400.53C382.66,-349.67 462.39,-285.89 527.2,-234.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="528.45,-236.41 532.66,-229.67 525.17,-232.31 528.45,-236.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="440.13,-307.4 440.13,-330.2 500.61,-330.2 500.61,-307.4 440.13,-307.4"/>
<text xml:space="preserve" text-anchor="start" x="443.13" y="-313.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes to</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M646,-400.53C646,-351.02 646,-289.25 646,-238.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="648.63,-238.31 646,-230.81 643.38,-238.31 648.63,-238.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="646,-307.4 646,-330.2 731.36,-330.2 731.36,-307.4 646,-307.4"/>
<text xml:space="preserve" text-anchor="start" x="649" y="-313.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">renders from</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M760.39,-400.53C825.84,-349.67 907.94,-285.89 974.67,-234.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="976.03,-236.31 980.34,-229.64 972.81,-232.16 976.03,-236.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="885.02,-297.2 885.02,-340.4 1102.72,-340.4 1102.72,-297.2 885.02,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="888.02" y="-323.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="888.02" y="-302.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
</g>
<!-- pushservice&#45;&gt;pwa -->
<g id="edge1" class="edge">
<title>pushservice&#45;&gt;pwa</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1055.33C208,-1011.5 208,-958.48 208,-913.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-913.47 208,-905.97 205.38,-913.47 210.63,-913.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-972.4 208,-995.2 296.49,-995.2 296.49,-972.4 208,-972.4"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-978.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
</g>
</svg>
`;case`flowRsvp`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4514pt" height="466pt"
 viewBox="0.00 0.00 4514.00 466.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 451.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-341 0,-341 0,-161 361.12,-161 361.12,-341"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-263" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-240" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="101.77" y="-222" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- features -->
<g id="node2" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="991.13,-341 671.09,-341 671.09,-161 991.13,-161 991.13,-341"/>
<text xml:space="preserve" text-anchor="start" x="768.86" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="710.19" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="700.21" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="696.67" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
</g>
<!-- commands -->
<g id="node3" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1581.96,-341 1245.05,-341 1245.05,-161 1581.96,-161 1581.96,-341"/>
<text xml:space="preserve" text-anchor="start" x="1362.37" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="1265.1" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain policy,</text>
<text xml:space="preserve" text-anchor="start" x="1278.44" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">call the API, reconcile with the confirmed</text>
<text xml:space="preserve" text-anchor="start" x="1386.81" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">change.</text>
</g>
<!-- replica -->
<g id="node4" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2706.59,-180 2375.5,-180 2375.5,0 2706.59,0 2706.59,-180"/>
<text xml:space="preserve" text-anchor="start" x="2507.7" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="2395.55" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see it.</text>
<text xml:space="preserve" text-anchor="start" x="2417" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="2501.85" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- http -->
<g id="node5" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2315.5,-436 1963.54,-436 1963.54,-256 2315.5,-256 2315.5,-436"/>
<text xml:space="preserve" text-anchor="start" x="2094.51" y="-376.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="2102.3" y="-355.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1983.59" y="-334.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="2009.87" y="-316.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Gates, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="2064.49" y="-298.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- msessions -->
<g id="node6" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3086.63,-436 2766.59,-436 2766.59,-256 3086.63,-256 3086.63,-436"/>
<text xml:space="preserve" text-anchor="start" x="2887.71" y="-358" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="2799.48" y="-335" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="2871.16" y="-317" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- kernel -->
<g id="node7" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3829.03,-436 3501.28,-436 3501.28,-256 3829.03,-256 3829.03,-436"/>
<text xml:space="preserve" text-anchor="start" x="3636.25" y="-358" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="3521.33" y="-335" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="3535.51" y="-317" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- feed -->
<g id="node8" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4483.81,-265 4122.67,-265 4122.67,-85 4483.81,-85 4483.81,-265"/>
<text xml:space="preserve" text-anchor="start" x="4245.97" y="-205.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="4290.24" y="-184.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="4169.02" y="-163.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="4142.73" y="-145.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="4245.29" y="-127.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;features -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.92,-251C454.7,-251 568.82,-251 661.04,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="660.79,-253.63 668.29,-251 660.79,-248.38 660.79,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.12,-254 424.12,-286.8 448.12,-286.8 448.12,-254 424.12,-254"/>
<text xml:space="preserve" text-anchor="start" x="432.22" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.12,-254 451.12,-286.8 608.09,-286.8 608.09,-254 451.12,-254"/>
<text xml:space="preserve" text-anchor="start" x="454.12" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps RSVP on a session</text>
</g>
<!-- features&#45;&gt;commands -->
<g id="edge2" class="edge">
<title>features&#45;&gt;commands</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M991.09,-251C1066.57,-251 1157.05,-251 1234.79,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1234.65,-253.63 1242.15,-251 1234.65,-248.38 1234.65,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1054.13,-254 1054.13,-286.8 1078.13,-286.8 1078.13,-254 1054.13,-254"/>
<text xml:space="preserve" text-anchor="start" x="1062.24" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1081.13,-254 1081.13,-286.8 1182.05,-286.8 1182.05,-254 1081.13,-254"/>
<text xml:space="preserve" text-anchor="start" x="1084.13" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp(sessionId)</text>
</g>
<!-- commands&#45;&gt;replica -->
<g id="edge3" class="edge">
<title>commands&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1570.49,-161.13C1593.84,-150.83 1618.1,-141.76 1641.96,-135.4 1886.81,-70.17 2182.19,-69.4 2365.6,-77.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2365.24,-80.19 2372.86,-77.91 2365.49,-74.95 2365.24,-80.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1645.35,-138.4 1645.35,-178 1669.35,-178 1669.35,-138.4 1645.35,-138.4"/>
<text xml:space="preserve" text-anchor="start" x="1653.46" y="-155" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1672.35,-138.4 1672.35,-178 1900.14,-178 1900.14,-138.4 1672.35,-138.4"/>
<text xml:space="preserve" text-anchor="start" x="1675.35" y="-161" font-family="Arial" font-size="14.00" fill="#c9c9c9">apply predicted change (policy says</text>
<text xml:space="preserve" text-anchor="start" x="1686.63" y="-144.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">allowed, capacity not exceeded)</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1581.69,-281.65C1601.97,-285 1622.41,-288.2 1641.96,-291 1744.68,-305.71 1859.84,-318.68 1953.38,-328.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1953.07,-330.93 1960.8,-329.09 1953.61,-325.71 1953.07,-330.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1650.8,-325.58 1650.8,-381.98 1674.8,-381.98 1674.8,-325.58 1650.8,-325.58"/>
<text xml:space="preserve" text-anchor="start" x="1658.91" y="-350.58" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1677.8,-325.58 1677.8,-381.98 1894.69,-381.98 1894.69,-325.58 1677.8,-325.58"/>
<text xml:space="preserve" text-anchor="start" x="1680.8" y="-364.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">PUT /sessions/{id}/rsvps/{guestId}</text>
<text xml:space="preserve" text-anchor="start" x="1727.11" y="-348.18" font-family="Arial" font-size="14.00" fill="#c9c9c9">(Idempotency&#45;Key)</text>
<text xml:space="preserve" text-anchor="start" x="1738.8" y="-331.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS / JSON</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge9" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1592.1,-217.29C1685.91,-205.56 1802.28,-200.7 1903.54,-225.2 1932.29,-232.16 1961.47,-243.28 1989.04,-256.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1592.05,-214.66 1584.94,-218.22 1592.72,-219.86 1592.05,-214.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1644.96,-228.2 1644.96,-261 1668.96,-261 1668.96,-228.2 1644.96,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1653.06" y="-241.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1671.96,-228.2 1671.96,-261 1900.54,-261 1900.54,-228.2 1671.96,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1674.96" y="-239" font-family="Arial" font-size="14.00" fill="#c9c9c9">the result, with the recorded change</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge8" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2716.76,-98.44C3052.27,-114.64 3783.55,-149.95 4122.77,-166.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2717.1,-95.83 2709.48,-98.09 2716.84,-101.07 2717.1,-95.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3165.78,-135.5 3165.78,-191.9 3189.78,-191.9 3189.78,-135.5 3165.78,-135.5"/>
<text xml:space="preserve" text-anchor="start" x="3173.89" y="-160.5" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3192.78,-135.5 3192.78,-191.9 3422.13,-191.9 3422.13,-135.5 3192.78,-135.5"/>
<text xml:space="preserve" text-anchor="start" x="3195.78" y="-174.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">change seq N to every viewer of the</text>
<text xml:space="preserve" text-anchor="start" x="3208.24" y="-158.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">event (this one matches it to the</text>
<text xml:space="preserve" text-anchor="start" x="3217.97" y="-141.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">prediction by command_key)</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge5" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2315.24,-346C2446.78,-346 2626.06,-346 2756.27,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2756.22,-348.63 2763.72,-346 2756.22,-343.38 2756.22,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2394.97,-349 2394.97,-388.6 2418.97,-388.6 2418.97,-349 2394.97,-349"/>
<text xml:space="preserve" text-anchor="start" x="2403.08" y="-365.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2421.97,-349 2421.97,-388.6 2687.12,-388.6 2687.12,-349 2421.97,-349"/>
<text xml:space="preserve" text-anchor="start" x="2424.97" y="-371.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp use case: check phase and capacity,</text>
<text xml:space="preserve" text-anchor="start" x="2491.13" y="-354.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">write, record change</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge6" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3086.53,-346C3205.71,-346 3368.7,-346 3491.16,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3490.86,-348.63 3498.36,-346 3490.86,-343.38 3490.86,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3149.63,-349 3149.63,-381.8 3173.63,-381.8 3173.63,-349 3149.63,-349"/>
<text xml:space="preserve" text-anchor="start" x="3157.74" y="-362.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3176.63,-349 3176.63,-381.8 3438.28,-381.8 3438.28,-349 3176.63,-349"/>
<text xml:space="preserve" text-anchor="start" x="3179.63" y="-359.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">commit state + change in one transaction</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3828.72,-302.3C3915.38,-279 4022.46,-250.21 4112.86,-225.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4113.47,-228.47 4120.03,-223.98 4112.11,-223.4 4113.47,-228.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3892.03,-288.81 3892.03,-321.61 3916.03,-321.61 3916.03,-288.81 3892.03,-288.81"/>
<text xml:space="preserve" text-anchor="start" x="3900.13" y="-302.01" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3919.03,-288.81 3919.03,-321.61 4059.67,-321.61 4059.67,-288.81 3919.03,-288.81"/>
<text xml:space="preserve" text-anchor="start" x="3922.03" y="-299.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish change seq N</text>
</g>
</g>
</svg>
`;case`flowSessionChanged`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3085pt" height="1080pt"
 viewBox="0.00 0.00 3085.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<!-- siteadmin -->
<g id="node1" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="325.97,-180 5.93,-180 5.93,0 325.97,0 325.97,-180"/>
<text xml:space="preserve" text-anchor="start" x="118.7" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="26.29" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="141.77" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- http -->
<g id="node2" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1054.09,-180 702.13,-180 702.13,0 1054.09,0 1054.09,-180"/>
<text xml:space="preserve" text-anchor="start" x="833.11" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="840.89" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="722.19" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="748.47" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Gates, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="803.09" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- msessions -->
<g id="node3" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1716.8,-180 1396.76,-180 1396.76,0 1716.8,0 1716.8,-180"/>
<text xml:space="preserve" text-anchor="start" x="1517.88" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="1429.65" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="1501.32" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- kernel -->
<g id="node4" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2352.2,-180 2024.45,-180 2024.45,0 2352.2,0 2352.2,-180"/>
<text xml:space="preserve" text-anchor="start" x="2159.42" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="2044.51" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="2058.68" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- feed -->
<g id="node5" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3054.48,-180 2693.34,-180 2693.34,0 3054.48,0 3054.48,-180"/>
<text xml:space="preserve" text-anchor="start" x="2816.63" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2860.9" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2739.68" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2713.39" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2815.95" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node6" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="331.9,-760 0,-760 0,-580 331.9,-580 331.9,-760"/>
<text xml:space="preserve" text-anchor="start" x="144.83" y="-691" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="29.19" y="-668" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single leased loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">deliveries (email, push), reminders, pruning.</text>
<text xml:space="preserve" text-anchor="start" x="126.34" y="-632" font-family="Arial" font-size="15.00" fill="#bfdbfe">Idempotent.</text>
</g>
<!-- mnotifications -->
<g id="node7" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1045.34,-1050 710.89,-1050 710.89,-870 1045.34,-870 1045.34,-1050"/>
<text xml:space="preserve" text-anchor="start" x="825.31" y="-972" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="734.28" y="-949" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push subscriptions.</text>
<text xml:space="preserve" text-anchor="start" x="730.94" y="-931" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email and push delivery run in the jobs loop.</text>
</g>
<!-- smtp -->
<g id="node8" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1038.13,-760 718.09,-760 718.09,-580 1038.13,-580 1038.13,-760"/>
<text xml:space="preserve" text-anchor="start" x="814.2" y="-673" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="821.85" y="-650" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node9" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1038.13,-470 718.09,-470 718.09,-290 1038.13,-290 1038.13,-470"/>
<text xml:space="preserve" text-anchor="start" x="777.52" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="738.45" y="-369" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="849.35" y="-351" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- siteadmin&#45;&gt;http -->
<g id="edge1" class="edge">
<title>siteadmin&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M325.88,-90C434.33,-90 578.36,-90 691.99,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="691.67,-92.63 699.17,-90 691.67,-87.38 691.67,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.32,-93 443.32,-125.8 467.32,-125.8 467.32,-93 443.32,-93"/>
<text xml:space="preserve" text-anchor="start" x="451.43" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="470.32,-93 470.32,-125.8 590.71,-125.8 590.71,-93 470.32,-93"/>
<text xml:space="preserve" text-anchor="start" x="473.32" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">PUT /sessions/{id}</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge2" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1053.81,-90C1156.22,-90 1284.97,-90 1386.44,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1386.27,-92.63 1393.77,-90 1386.27,-87.38 1386.27,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.09,-93 1117.09,-125.8 1141.09,-125.8 1141.09,-93 1117.09,-93"/>
<text xml:space="preserve" text-anchor="start" x="1125.2" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.09,-93 1144.09,-125.8 1333.76,-125.8 1333.76,-93 1144.09,-93"/>
<text xml:space="preserve" text-anchor="start" x="1147.09" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">update use case: clash check</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge3" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1716.64,-90C1807.4,-90 1921.29,-90 2014.31,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2014.15,-92.63 2021.65,-90 2014.15,-87.38 2014.15,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1779.8,-93 1779.8,-125.8 1803.8,-125.8 1803.8,-93 1779.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="1787.91" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.8,-93 1806.8,-125.8 1961.45,-125.8 1961.45,-93 1806.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="1809.8" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">record session.changed</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2352.19,-90C2451.65,-90 2579.26,-90 2683.26,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2683.05,-92.63 2690.55,-90 2683.05,-87.38 2683.05,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2415.2,-93 2415.2,-125.8 2439.2,-125.8 2439.2,-93 2415.2,-93"/>
<text xml:space="preserve" text-anchor="start" x="2423.31" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2442.2,-93 2442.2,-125.8 2630.34,-125.8 2630.34,-93 2442.2,-93"/>
<text xml:space="preserve" text-anchor="start" x="2445.2" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish to the event audience</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge5" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M331.66,-737.26C442.56,-782.55 588.62,-842.19 701.69,-888.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="700.41,-890.68 708.34,-891.08 702.39,-885.82 700.41,-890.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="394.9,-860.92 394.9,-917.32 418.9,-917.32 418.9,-860.92 394.9,-860.92"/>
<text xml:space="preserve" text-anchor="start" x="403.01" y="-885.92" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="421.9,-860.92 421.9,-917.32 639.13,-917.32 639.13,-860.92 421.9,-860.92"/>
<text xml:space="preserve" text-anchor="start" x="440.82" y="-900.32" font-family="Arial" font-size="14.00" fill="#c9c9c9">reaction: session.changed &#45;&gt;</text>
<text xml:space="preserve" text-anchor="start" x="424.9" y="-883.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">notifications for hosts and RSVP&#39;d</text>
<text xml:space="preserve" text-anchor="start" x="499.77" y="-866.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">attendees</text>
</g>
<!-- jobs&#45;&gt;smtp -->
<g id="edge6" class="edge">
<title>jobs&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M331.66,-670C444.62,-670 594.07,-670 707.97,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="707.65,-672.63 715.15,-670 707.65,-667.38 707.65,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.78,-673 455.78,-705.8 479.78,-705.8 479.78,-673 455.78,-673"/>
<text xml:space="preserve" text-anchor="start" x="463.89" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.78,-673 482.78,-705.8 578.25,-705.8 578.25,-673 482.78,-673"/>
<text xml:space="preserve" text-anchor="start" x="485.78" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivery: email</text>
</g>
<!-- jobs&#45;&gt;pushservice -->
<g id="edge7" class="edge">
<title>jobs&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M331.66,-602.74C444.85,-556.52 594.67,-495.34 708.65,-448.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="709.43,-451.31 715.38,-446.05 707.44,-446.45 709.43,-451.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="457.33,-579.2 457.33,-612 481.33,-612 481.33,-579.2 457.33,-579.2"/>
<text xml:space="preserve" text-anchor="start" x="465.43" y="-592.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.33,-579.2 484.33,-612 576.71,-612 576.71,-579.2 484.33,-579.2"/>
<text xml:space="preserve" text-anchor="start" x="487.33" y="-590" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivery: push</text>
</g>
</g>
</svg>
`;case`flowJoin`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2583pt" height="512pt"
 viewBox="0.00 0.00 2583.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-334 0,-334 0,-154 361.12,-154 361.12,-334"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="101.77" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- shell -->
<g id="node2" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1024.6,-334 704.56,-334 704.56,-154 1024.6,-154 1024.6,-334"/>
<text xml:space="preserve" text-anchor="start" x="803.99" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="726.16" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="784.95" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- http -->
<g id="node3" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1781.46,-482 1429.49,-482 1429.49,-302 1781.46,-302 1781.46,-482"/>
<text xml:space="preserve" text-anchor="start" x="1560.47" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1568.26" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1449.55" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1475.83" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Gates, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1530.45" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- mpeople -->
<g id="node4" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2532.4,-482 2212.36,-482 2212.36,-302 2532.4,-302 2532.4,-482"/>
<text xml:space="preserve" text-anchor="start" x="2342.35" y="-404" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="2233.99" y="-381" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="2242.33" y="-363" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- replica -->
<g id="node5" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1771.02,-180 1439.93,-180 1439.93,0 1771.02,0 1771.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="1572.13" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1459.98" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see it.</text>
<text xml:space="preserve" text-anchor="start" x="1481.43" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="1566.28" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- feed -->
<g id="node6" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2552.95,-180 2191.81,-180 2191.81,0 2552.95,0 2552.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="2315.11" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2359.38" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2238.16" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2211.87" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2314.43" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;shell -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.75,-244C463.96,-244 592.92,-244 694.4,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="694.23,-246.63 701.73,-244 694.23,-241.38 694.23,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.12,-247 424.12,-279.8 448.12,-279.8 448.12,-247 424.12,-247"/>
<text xml:space="preserve" text-anchor="start" x="432.22" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.12,-247 451.12,-279.8 641.56,-279.8 641.56,-247 451.12,-247"/>
<text xml:space="preserve" text-anchor="start" x="454.12" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens /join/{token} from email</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge2" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1024.31,-278.44C1044.58,-282.73 1065.07,-287.01 1084.6,-291 1195.53,-313.68 1320.03,-337.91 1419.39,-356.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1418.7,-359.49 1426.56,-358.32 1419.69,-354.33 1418.7,-359.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.39,-349.92 1137.39,-382.72 1161.39,-382.72 1161.39,-349.92 1137.39,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1145.49" y="-363.12" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1164.39,-349.92 1164.39,-382.72 1316.7,-382.72 1316.7,-349.92 1164.39,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1167.39" y="-360.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /auth/join {token}</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge4" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1034.62,-205.36C1134.44,-189.86 1261.91,-182.97 1369.49,-218.4 1421.52,-235.53 1471.47,-269.11 1511.84,-302.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1034.42,-202.74 1027.43,-206.51 1035.25,-207.92 1034.42,-202.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1087.6,-221.4 1087.6,-261 1111.6,-261 1111.6,-221.4 1087.6,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1095.71" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1114.6,-221.4 1114.6,-261 1366.49,-261 1366.49,-221.4 1114.6,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1117.6" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">Set&#45;Cookie (httpOnly, SameSite=Lax) +</text>
<text xml:space="preserve" text-anchor="start" x="1200.47" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">actor context</text>
</g>
<!-- shell&#45;&gt;replica -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1014.68,-154.04C1037.47,-143.4 1061.2,-133.94 1084.6,-127.2 1196.5,-94.94 1327.29,-85.71 1429.69,-84.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1429.64,-87.14 1437.11,-84.45 1429.59,-81.89 1429.64,-87.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1178.24,-130.2 1178.24,-163 1202.24,-163 1202.24,-130.2 1178.24,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1186.35" y="-143.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1205.24,-130.2 1205.24,-163 1275.85,-163 1275.85,-130.2 1205.24,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1208.24" y="-141" font-family="Arial" font-size="14.00" fill="#c9c9c9">load event</text>
</g>
<!-- http&#45;&gt;mpeople -->
<g id="edge3" class="edge">
<title>http&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1781,-392C1907.3,-392 2077.07,-392 2202.14,-392"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2202.05,-394.63 2209.55,-392 2202.05,-389.38 2202.05,-394.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1856.51,-395 1856.51,-434.6 1880.51,-434.6 1880.51,-395 1856.51,-395"/>
<text xml:space="preserve" text-anchor="start" x="1864.62" y="-411.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1883.51,-395 1883.51,-434.6 2116.76,-434.6 2116.76,-395 1883.51,-395"/>
<text xml:space="preserve" text-anchor="start" x="1886.51" y="-417.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">validate token, create a verified login</text>
<text xml:space="preserve" text-anchor="start" x="1976.4" y="-400.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">session</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1770.57,-90C1891.2,-90 2055.42,-90 2181.69,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2181.34,-92.63 2188.84,-90 2181.34,-87.38 2181.34,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1844.46,-93 1844.46,-132.6 1868.46,-132.6 1868.46,-93 1844.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="1852.56" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1871.46,-93 1871.46,-132.6 2128.81,-132.6 2128.81,-93 1871.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="1874.46" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET snapshot, then subscribe since seq</text>
<text xml:space="preserve" text-anchor="start" x="1939.44" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
</g>
</svg>
`;case`flowReconnect`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2583pt" height="512pt"
 viewBox="0.00 0.00 2583.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- pwa -->
<g id="node1" class="node">
<title>pwa</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-334 0,-334 0,-154 320.04,-154 320.04,-334"/>
<text xml:space="preserve" text-anchor="start" x="101.12" y="-265.8" font-family="Arial" font-size="20.00" fill="#eff6ff">PWA runtime</text>
<text xml:space="preserve" text-anchor="start" x="117.04" y="-244.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Service worker</text>
<text xml:space="preserve" text-anchor="start" x="33.29" y="-223.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Cached shell, push notifications, kiosk</text>
<text xml:space="preserve" text-anchor="start" x="117.5" y="-205.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">keep&#45;awake.</text>
</g>
<!-- shell -->
<g id="node2" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1044.24,-334 724.2,-334 724.2,-154 1044.24,-154 1044.24,-334"/>
<text xml:space="preserve" text-anchor="start" x="823.63" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="745.8" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="804.59" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- replica -->
<g id="node3" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1777.91,-334 1446.82,-334 1446.82,-154 1777.91,-154 1777.91,-334"/>
<text xml:space="preserve" text-anchor="start" x="1579.01" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1466.87" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see it.</text>
<text xml:space="preserve" text-anchor="start" x="1488.32" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="1573.17" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- feed -->
<g id="node4" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2552.55,-482 2191.41,-482 2191.41,-302 2552.55,-302 2552.55,-482"/>
<text xml:space="preserve" text-anchor="start" x="2314.71" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2358.98" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2237.76" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2211.47" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2314.03" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2532,-180 2211.96,-180 2211.96,0 2532,0 2532,-180"/>
<text xml:space="preserve" text-anchor="start" x="2309.74" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="2251.07" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="2241.08" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="2237.54" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
</g>
<!-- pwa&#45;&gt;shell -->
<g id="edge1" class="edge">
<title>pwa&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.96,-244C436.68,-244 594.99,-244 714.05,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="713.83,-246.63 721.33,-244 713.83,-241.38 713.83,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-247 383.04,-279.8 407.04,-279.8 407.04,-247 383.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-247 410.04,-279.8 661.2,-279.8 661.2,-247 410.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">app opened offline: shell from precache</text>
</g>
<!-- shell&#45;&gt;replica -->
<g id="edge2" class="edge">
<title>shell&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1044.12,-244C1160.02,-244 1317.03,-244 1436.48,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1436.3,-246.63 1443.8,-244 1436.3,-241.38 1436.3,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1107.24,-247 1107.24,-286.6 1131.24,-286.6 1131.24,-247 1107.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1115.34" y="-263.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1134.24,-247 1134.24,-286.6 1383.82,-286.6 1383.82,-247 1134.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1137.24" y="-269.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">load persisted replica (seq 4120), show</text>
<text xml:space="preserve" text-anchor="start" x="1199.58" y="-252.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">&quot;last synced 14:02&quot;</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1777.62,-278.76C1797.91,-282.94 1818.38,-287.11 1837.91,-291 1951.78,-313.7 2079.59,-337.96 2181.51,-357.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2180.78,-359.54 2188.63,-358.34 2181.74,-354.38 2180.78,-359.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1898.31,-349.92 1898.31,-389.52 1922.31,-389.52 1922.31,-349.92 1898.31,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1906.42" y="-366.52" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1925.31,-349.92 1925.31,-389.52 2071.02,-389.52 2071.02,-349.92 1925.31,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1928.31" y="-372.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET feed?since=4120</text>
<text xml:space="preserve" text-anchor="start" x="1937.47" y="-355.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1787.87,-204.88C1890.32,-189.35 2020.95,-182.59 2131.41,-218.4 2184.18,-235.51 2235.07,-269.08 2276.26,-302.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1787.73,-202.25 1780.72,-206 1788.54,-207.43 1787.73,-202.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1840.91,-221.4 1840.91,-261 1864.91,-261 1864.91,-221.4 1840.91,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1849.02" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1867.91,-221.4 1867.91,-261 2128.41,-261 2128.41,-221.4 1867.91,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1870.91" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">changes 4121..4187, or a reset message</text>
<text xml:space="preserve" text-anchor="start" x="1921.89" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">if pruned → full snapshot</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge5" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1764.46,-154.06C1788.38,-142.99 1813.34,-133.15 1837.91,-126.2 1956.37,-92.72 2095.26,-84.22 2201.57,-83.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2201.56,-86.43 2209.05,-83.79 2201.55,-81.18 2201.56,-86.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1877.5,-129.2 1877.5,-162 1901.5,-162 1901.5,-129.2 1877.5,-129.2"/>
<text xml:space="preserve" text-anchor="start" x="1885.6" y="-142.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1904.5,-129.2 1904.5,-162 2091.83,-162 2091.83,-129.2 1904.5,-129.2"/>
<text xml:space="preserve" text-anchor="start" x="1907.5" y="-140" font-family="Arial" font-size="14.00" fill="#c9c9c9">re&#45;render, banner disappears</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};