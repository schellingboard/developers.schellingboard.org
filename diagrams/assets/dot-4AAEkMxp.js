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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, keeps a personal agenda, arranges<BR/>1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SchellingBoard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unconference scheduling: propose → vote →<BR/>schedule, with a live personal agenda.</FONT></TD></TR></TABLE>>,
        likec4_id=sb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id="1t5r585",
        minlen=1,
        style=dashed];
    organizer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Organizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Configures an event: days, places, phases,<BR/>booking rules, fixtures. Moderates. A role on<BR/>a person, not a separate login.</FONT></TD></TR></TABLE>>,
        likec4_id=organizer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    organizer -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">configures event, moderates</FONT></TD></TR></TABLE>>,
        likec4_id="1smlpsa",
        minlen=1,
        style=dashed];
    siteadmin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, people,<BR/>events, API tokens.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1ssui73",
        minlen=1,
        style=dashed];
    bot [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Bot / integration</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A script or chat bot holding an API token.<BR/>Same API, same rules as a person.</FONT></TD></TR></TABLE>>,
        likec4_id=bot,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bot -> sb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls with API token</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1i6mc3m",
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
    chatplatform [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Telegram, Matrix or Signal — reached through<BR/>a channel adapter.</FONT></TD></TR></TABLE>>,
        likec4_id=chatPlatform,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb -> chatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends messages</FONT></TD></TR></TABLE>>,
        likec4_id=e2xntm,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node, Hono, TypeScript</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One process: HTTP API, change feed,<BR/>background jobs. Serves the web app as static<BR/>files.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars and venue maps, re-encoded on upload,<BR/>immutable names.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.files",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    attendee [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, keeps a personal agenda, arranges<BR/>1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id=yn1evf,
        minlen=1,
        style=dashed];
    organizer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Organizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Configures an event: days, places, phases,<BR/>booking rules, fixtures. Moderates. A role on<BR/>a person, not a separate login.</FONT></TD></TR></TABLE>>,
        likec4_id=organizer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    organizer -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">configures event, moderates</FONT></TD></TR></TABLE>>,
        likec4_id="1olx2es",
        minlen=1,
        style=dashed];
    siteadmin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, people,<BR/>events, API tokens.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1f862jl",
        minlen=1,
        style=dashed];
    bot [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Bot / integration</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A script or chat bot holding an API token.<BR/>Same API, same rules as a person.</FONT></TD></TR></TABLE>>,
        likec4_id=bot,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bot -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls with API token</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qxhyll",
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
    chatplatform [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Telegram, Matrix or Signal — reached through<BR/>a channel adapter.</FONT></TD></TR></TABLE>>,
        likec4_id=chatPlatform,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> chatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends messages</FONT></TD></TR></TABLE>>,
        likec4_id=hhnsxd,
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
        http [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Auth, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single scheduler loop: reactions to changes,<BR/>scheduled work (reminders, lapses), delivery<BR/>attempts. Leased, idempotent.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.jobs",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mpersonal [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">personal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Private marks (star, hide, note) on sessions,<BR/>proposals and people. Preferences.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mPersonal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        midentity [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">identity</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Join links, email codes, passkeys, passwords,<BR/>login sessions, API tokens, roles.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mIdentity",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mnotifications [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notification records, per-channel preferences<BR/>and bindings, delivery log. Channels: in-app,<BR/>email, push, chat.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mNotifications",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mproposals [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, votes, proposal comments,<BR/>attendance prediction.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mProposals",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mscheduling [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">scheduling</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions (kinds: session, shift, fixture),<BR/>RSVPs, booking rules, reserved windows,<BR/>capacity.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mScheduling",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mmeetings [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>settings, lapse.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mMeetings",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kernel [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, clock, ids, actor<BR/>context, errors. The only code every module<BR/>may import.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.kernel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mvenue [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Places (rooms, areas, meeting points),<BR/>floors, directions, map pins.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mVenue",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mpeople [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Persons, participation in events, profiles,<BR/>profile comments, labels.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mPeople",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mevents [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Event, days, phases, timezone, per-event<BR/>settings.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mEvents",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    bot [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Bot / integration</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A script or chat bot holding an API token.<BR/>Same API, same rules as a person.</FONT></TD></TR></TABLE>>,
        likec4_id=bot,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bot -> http [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls with API token</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1h2uatb",
        minlen=1,
        style=dashed];
    web [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Vite, TypeScript, PWA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Static single-page app. Holds a per-event<BR/>replica and renders every view from it.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.web",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    web -> http [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">commands and queries</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijxsbt",
        style=dashed,
        weight=2];
    web -> feed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">snapshot, then changes since seq</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Server-Sent Events ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijzftf",
        style=dotted];
    http -> midentity [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="1rh3qix",
        style=dashed,
        weight=3];
    http -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id="8n8dy8",
        style=dashed,
        weight=3];
    http -> mscheduling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id=ncfwlb,
        style=dashed,
        weight=3];
    feed -> kernel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads change log</FONT></TD></TR></TABLE>>,
        likec4_id=uurmur,
        style=dashed,
        weight=2];
    jobs -> mnotifications [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs reactions and deliveries</FONT></TD></TR></TABLE>>,
        likec4_id="1oa5mp9",
        minlen=1,
        style=dashed,
        weight=3];
    mpersonal -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references proposals</FONT></TD></TR></TABLE>>,
        likec4_id=zoucwd,
        style=dashed];
    mpersonal -> mscheduling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="1leb8he",
        style=dashed];
    mpersonal -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references persons</FONT></TD></TR></TABLE>>,
        likec4_id="1btk7ch",
        style=dashed];
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars and venue maps, re-encoded on upload,<BR/>immutable names.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.files",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    midentity -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">resolves persons</FONT></TD></TR></TABLE>>,
        likec4_id=tjj2rj,
        style=dashed];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        style=dashed,
        weight=3];
    mnotifications -> mscheduling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="1hibtsk",
        style=dashed,
        weight=3];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
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
    mnotifications -> smtp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
        likec4_id=cx39br,
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
    mnotifications -> pushservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="1mlofwu",
        minlen=1,
        style=dashed];
    chatplatform [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Telegram, Matrix or Signal — reached through<BR/>a channel adapter.</FONT></TD></TR></TABLE>>,
        likec4_id=chatPlatform,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> chatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends messages</FONT></TD></TR></TABLE>>,
        likec4_id="1ukzgp8",
        minlen=1,
        style=dashed];
    mproposals -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases</FONT></TD></TR></TABLE>>,
        likec4_id=ms95ka,
        style=dashed];
    mscheduling -> kernel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">records changes</FONT></TD></TR></TABLE>>,
        likec4_id=j4sb8c,
        style=dashed];
    mscheduling -> mvenue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads places</FONT></TD></TR></TABLE>>,
        likec4_id=f3ofif,
        style=dashed];
    mscheduling -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases, days</FONT></TD></TR></TABLE>>,
        likec4_id="1o86at1",
        style=dashed];
    mmeetings -> mvenue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads places</FONT></TD></TR></TABLE>>,
        likec4_id="1p7e2wd",
        style=dashed];
    mmeetings -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads participations</FONT></TD></TR></TABLE>>,
        likec4_id=totwdf,
        style=dashed];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases, slot grid</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        style=dashed];
    mpeople -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">participation is per event</FONT></TD></TR></TABLE>>,
        likec4_id="1ke4t4m",
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
    midentity [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">identity</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Join links, email codes, passkeys, passwords,<BR/>login sessions, API tokens, roles.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mIdentity",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpeople [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Persons, participation in events, profiles,<BR/>profile comments, labels.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mPeople",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    midentity -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">resolves persons</FONT></TD></TR></TABLE>>,
        likec4_id=tjj2rj,
        minlen=1,
        style=dashed];
    mpersonal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">personal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Private marks (star, hide, note) on sessions,<BR/>proposals and people. Preferences.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mPersonal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mproposals [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, votes, proposal comments,<BR/>attendance prediction.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mProposals",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpersonal -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references proposals</FONT></TD></TR></TABLE>>,
        likec4_id=zoucwd,
        style=dashed];
    mscheduling [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">scheduling</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions (kinds: session, shift, fixture),<BR/>RSVPs, booking rules, reserved windows,<BR/>capacity.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mScheduling",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpersonal -> mscheduling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="1leb8he",
        style=dashed];
    mpersonal -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references persons</FONT></TD></TR></TABLE>>,
        likec4_id="1btk7ch",
        style=dashed];
    mnotifications [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notification records, per-channel preferences<BR/>and bindings, delivery log. Channels: in-app,<BR/>email, push, chat.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mNotifications",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        style=dashed];
    mnotifications -> mscheduling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="1hibtsk",
        style=dashed];
    mmeetings [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>settings, lapse.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mMeetings",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
        style=dashed];
    mevents [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Event, days, phases, timezone, per-event<BR/>settings.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mEvents",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mproposals -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases</FONT></TD></TR></TABLE>>,
        likec4_id=ms95ka,
        style=dashed];
    mvenue [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Places (rooms, areas, meeting points),<BR/>floors, directions, map pins.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mVenue",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mscheduling -> mvenue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads places</FONT></TD></TR></TABLE>>,
        likec4_id=f3ofif,
        style=dashed];
    mscheduling -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases, days</FONT></TD></TR></TABLE>>,
        likec4_id="1o86at1",
        style=dashed];
    mmeetings -> mvenue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads places</FONT></TD></TR></TABLE>>,
        likec4_id="1p7e2wd",
        style=dashed];
    mmeetings -> mpeople [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads participations</FONT></TD></TR></TABLE>>,
        likec4_id=totwdf,
        style=dashed];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases, slot grid</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        style=dashed];
    mpeople -> mevents [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">participation is per event</FONT></TD></TR></TABLE>>,
        likec4_id="1ke4t4m",
        style=dashed];
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PWA runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Service worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Precached shell, push notifications, kiosk<BR/>keep-awake.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Normalized copy of one event as the viewer<BR/>may see it. Snapshot + change feed, persisted<BR/>in IndexedDB.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.replica",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        features [group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, agenda, proposals, voting, people,<BR/>meetings, settings, admin. Pure functions of<BR/>replica + local UI state.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Auth, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>,
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, keeps a personal agenda, arranges<BR/>1-on-1s.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "features" [
    likec4_id = "sb.web.features";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, agenda, proposals, voting, people,<BR/>meetings, settings, admin. Pure functions of<BR/>replica + local UI state.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Normalized copy of one event as the viewer<BR/>may see it. Snapshot + change feed, persisted<BR/>in IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Auth, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "mscheduling" [
    likec4_id = "sb.server.mScheduling";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">scheduling</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions (kinds: session, shift, fixture),<BR/>RSVPs, booking rules, reserved windows,<BR/>capacity.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, clock, ids, actor<BR/>context, errors. The only code every module<BR/>may import.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /events/{slug}/sessions/{id}/rsvp<BR/>(Idempotency-Key)<BR/>HTTPS / JSON</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "mscheduling" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">rsvp use case: authorize, check phase<BR/>and capacity, write, record change</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mscheduling" -> "kernel" [
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">201 with the recorded change</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`flowSessionMoved`:return`digraph {
  likec4_viewId = "flowSessionMoved";
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
  "organizer" [
    likec4_id = "organizer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Organizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Configures an event: days, places, phases,<BR/>booking rules, fixtures. Moderates. A role on<BR/>a person, not a separate login.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Auth, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "mscheduling" [
    likec4_id = "sb.server.mScheduling";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">scheduling</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions (kinds: session, shift, fixture),<BR/>RSVPs, booking rules, reserved windows,<BR/>capacity.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, clock, ids, actor<BR/>context, errors. The only code every module<BR/>may import.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single scheduler loop: reactions to changes,<BR/>scheduled work (reminders, lapses), delivery<BR/>attempts. Leased, idempotent.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "mnotifications" [
    likec4_id = "sb.server.mNotifications";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notification records, per-channel preferences<BR/>and bindings, delivery log. Channels: in-app,<BR/>email, push, chat.</FONT></TD></TR></TABLE>>;
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
  "chatplatform" [
    likec4_id = "chatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Telegram, Matrix or Signal — reached through<BR/>a channel adapter.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "organizer" -> "http" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /sessions/{id}/move</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "mscheduling" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">move use case: booking rules, reserved<BR/>windows, clash check</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mscheduling" -> "kernel" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">record SessionMoved</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kernel" -> "feed" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">publish to event audience</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "jobs" -> "mnotifications" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">reaction: SessionMoved -&gt; notifications<BR/>for hosts and RSVP'd attendees</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "kernel" -> "mnotifications" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">record NotificationCreated (audience:<BR/>one person each)</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "jobs" -> "mnotifications" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">delivery per bound channel with attempt<BR/>log</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mnotifications" -> "smtp" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">email</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mnotifications" -> "pushservice" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">push</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mnotifications" -> "chatplatform" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">chat message</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs, books<BR/>slots, keeps a personal agenda, arranges<BR/>1-on-1s.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from the<BR/>contracts package. Auth, rate limiting,<BR/>problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "midentity" [
    likec4_id = "sb.server.mIdentity";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">identity</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Join links, email codes, passkeys, passwords,<BR/>login sessions, API tokens, roles.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Normalized copy of one event as the viewer<BR/>may see it. Snapshot + change feed, persisted<BR/>in IndexedDB.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">opens /join/{token} from email or QR</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shell" -> "http" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /auth/join {token}</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "http" -> "midentity" [
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PWA runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Service worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Precached shell, push notifications, kiosk<BR/>keep-awake.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Normalized copy of one event as the viewer<BR/>may see it. Snapshot + change feed, persisted<BR/>in IndexedDB.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, agenda, proposals, voting, people,<BR/>meetings, settings, admin. Pure functions of<BR/>replica + local UI state.</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">changes 4121..4187, or 410 Gone if<BR/>pruned → full snapshot</FONT></TD></TR></TABLE>>;
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
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1695pt" height="876pt"
 viewBox="0.00 0.00 1695.00 876.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 861.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-846 0,-846 0,-666 361.12,-666 361.12,-846"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-777" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-754" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="42.97" y="-736" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, keeps a personal agenda, arranges</text>
<text xml:space="preserve" text-anchor="start" x="153.05" y="-718" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1s.</text>
</g>
<!-- sb -->
<g id="node2" class="node">
<title>sb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1024.45,-502.8 686.66,-502.8 686.66,-322.8 1024.45,-322.8 1024.45,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="788.29" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SchellingBoard</text>
<text xml:space="preserve" text-anchor="start" x="706.72" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unconference scheduling: propose → vote →</text>
<text xml:space="preserve" text-anchor="start" x="728.39" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">schedule, with a live personal agenda.</text>
</g>
<!-- organizer -->
<g id="node3" class="node">
<title>organizer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="804.36,-846 470.76,-846 470.76,-666 804.36,-666 804.36,-846"/>
<text xml:space="preserve" text-anchor="start" x="593.65" y="-777" font-family="Arial" font-size="20.00" fill="#eff6ff">Organizer</text>
<text xml:space="preserve" text-anchor="start" x="494.14" y="-754" font-family="Arial" font-size="15.00" fill="#bfdbfe">Configures an event: days, places, phases,</text>
<text xml:space="preserve" text-anchor="start" x="490.82" y="-736" font-family="Arial" font-size="15.00" fill="#bfdbfe">booking rules, fixtures. Moderates. A role on</text>
<text xml:space="preserve" text-anchor="start" x="536.24" y="-718" font-family="Arial" font-size="15.00" fill="#bfdbfe">a person, not a separate login.</text>
</g>
<!-- siteadmin -->
<g id="node4" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1234.7,-846 914.42,-846 914.42,-666 1234.7,-666 1234.7,-846"/>
<text xml:space="preserve" text-anchor="start" x="1027.31" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="934.48" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, people,</text>
<text xml:space="preserve" text-anchor="start" x="1009.94" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">events, API tokens.</text>
</g>
<!-- bot -->
<g id="node5" class="node">
<title>bot</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1664.58,-846 1344.54,-846 1344.54,-666 1664.58,-666 1664.58,-846"/>
<text xml:space="preserve" text-anchor="start" x="1434.51" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">Bot / integration</text>
<text xml:space="preserve" text-anchor="start" x="1368.65" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">A script or chat bot holding an API token.</text>
<text xml:space="preserve" text-anchor="start" x="1386.59" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">Same API, same rules as a person.</text>
</g>
<!-- pushservice -->
<g id="node6" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="687.58,-180 367.54,-180 367.54,0 687.58,0 687.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="426.97" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="387.89" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="498.79" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- smtp -->
<g id="node7" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1117.58,-180 797.54,-180 797.54,0 1117.58,0 1117.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="893.65" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="901.29" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- chatplatform -->
<g id="node8" class="node">
<title>chatplatform</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1573.6,-180 1227.51,-180 1227.51,0 1573.6,0 1573.6,-180"/>
<text xml:space="preserve" text-anchor="start" x="1340.53" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat platform</text>
<text xml:space="preserve" text-anchor="start" x="1247.57" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Telegram, Matrix or Signal — reached through</text>
<text xml:space="preserve" text-anchor="start" x="1338.43" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">a channel adapter.</text>
</g>
<!-- attendee&#45;&gt;sb -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M351.33,-666.07C414.59,-633.34 487.01,-596.14 553.13,-562.8 593.34,-542.53 636.69,-520.98 677.67,-500.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="678.64,-503.21 684.21,-497.54 676.32,-498.5 678.64,-503.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="553.13,-573 553.13,-595.8 701.56,-595.8 701.56,-573 553.13,-573"/>
<text xml:space="preserve" text-anchor="start" x="556.13" y="-578.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- sb&#45;&gt;pushservice -->
<g id="edge6" class="edge">
<title>sb&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M686.87,-368.28C632.29,-345.75 577.05,-312.21 542.72,-262.8 528.16,-241.84 521.61,-215.78 519.36,-190.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="521.98,-190.22 518.87,-182.91 516.75,-190.57 521.98,-190.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="542.72,-240 542.72,-262.8 654.56,-262.8 654.56,-240 542.72,-240"/>
<text xml:space="preserve" text-anchor="start" x="545.72" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- sb&#45;&gt;smtp -->
<g id="edge7" class="edge">
<title>sb&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M883.84,-322.87C896.99,-281.49 912.68,-232.15 926.2,-189.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="928.63,-190.66 928.4,-182.71 923.62,-189.07 928.63,-190.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="909.62,-240 909.62,-262.8 990.32,-262.8 990.32,-240 909.62,-240"/>
<text xml:space="preserve" text-anchor="start" x="912.62" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- sb&#45;&gt;chatplatform -->
<g id="edge8" class="edge">
<title>sb&#45;&gt;chatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1006.65,-322.87C1079.45,-280.01 1166.79,-228.6 1240.7,-185.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1241.91,-187.43 1247.04,-181.37 1239.24,-182.91 1241.91,-187.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.4,-240 1144.4,-262.8 1255.45,-262.8 1255.45,-240 1144.4,-240"/>
<text xml:space="preserve" text-anchor="start" x="1147.4" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends messages</text>
</g>
<!-- organizer&#45;&gt;sb -->
<g id="edge2" class="edge">
<title>organizer&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M690.46,-666.44C710.34,-633.68 733.35,-596.35 754.9,-562.8 765.71,-545.99 777.4,-528.26 788.87,-511.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="790.79,-512.99 792.79,-505.3 786.43,-510.06 790.79,-512.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="754.9,-573 754.9,-595.8 937.56,-595.8 937.56,-573 754.9,-573"/>
<text xml:space="preserve" text-anchor="start" x="757.9" y="-578.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">configures event, moderates</text>
</g>
<!-- siteadmin&#45;&gt;sb -->
<g id="edge3" class="edge">
<title>siteadmin&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1023.78,-666.08C1004.53,-633.28 982.07,-596.02 960.56,-562.8 949.55,-545.79 937.48,-527.97 925.56,-510.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="927.91,-509.58 921.46,-504.93 923.6,-512.58 927.91,-509.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="986.66,-573 986.66,-595.8 1134.28,-595.8 1134.28,-573 986.66,-573"/>
<text xml:space="preserve" text-anchor="start" x="989.66" y="-578.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- bot&#45;&gt;sb -->
<g id="edge4" class="edge">
<title>bot&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1350.21,-666.02C1291.55,-632.87 1223.86,-595.39 1161.56,-562.8 1120.46,-541.3 1075.8,-518.98 1033.62,-498.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1034.99,-496.11 1027.1,-495.18 1032.69,-500.83 1034.99,-496.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1237.53,-562.8 1237.53,-606 1364.92,-606 1364.92,-562.8 1237.53,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1240.53" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls with API token</text>
<text xml:space="preserve" text-anchor="start" x="1240.53" y="-568.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- pushservice&#45;&gt;sb -->
<g id="edge5" class="edge">
<title>pushservice&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M618.38,-179.83C661.56,-222.06 713.25,-272.62 757.34,-315.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="755.27,-317.38 762.46,-320.75 758.94,-313.63 755.27,-317.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="701.39,-240 701.39,-262.8 789.88,-262.8 789.88,-240 701.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="704.39" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
</g>
</svg>
`;case`containers`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2256pt" height="1651pt"
 viewBox="0.00 0.00 2256.00 1651.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1636.05)">
<g id="clust1" class="cluster">
<title>cluster_sb</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="623.77,-540 623.77,-1111 2217.82,-1111 2217.82,-540 623.77,-540"/>
<text xml:space="preserve" text-anchor="start" x="631.77" y="-1098.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHELLINGBOARD</text>
</g>
<!-- web -->
<g id="node1" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="983.81,-901 663.77,-901 663.77,-721 983.81,-721 983.81,-901"/>
<text xml:space="preserve" text-anchor="start" x="783.77" y="-832.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="738.9" y="-811.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="686.21" y="-790.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="697.08" y="-772.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1581.49,-901 1231.2,-901 1231.2,-721 1581.49,-721 1581.49,-901"/>
<text xml:space="preserve" text-anchor="start" x="1376.89" y="-841.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Server</text>
<text xml:space="preserve" text-anchor="start" x="1336.98" y="-820.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node, Hono, TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1278.36" y="-799.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One process: HTTP API, change feed,</text>
<text xml:space="preserve" text-anchor="start" x="1251.25" y="-781.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">background jobs. Serves the web app as static</text>
<text xml:space="preserve" text-anchor="start" x="1390.92" y="-763.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">files.</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2167.82,-743.64C2167.82,-752.67 2090.62,-760 1995.57,-760 1900.53,-760 1823.32,-752.67 1823.32,-743.64 1823.32,-743.64 1823.32,-596.36 1823.32,-596.36 1823.32,-587.33 1900.53,-580 1995.57,-580 2090.62,-580 2167.82,-587.33 2167.82,-596.36 2167.82,-596.36 2167.82,-743.64 2167.82,-743.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2167.82,-743.64C2167.82,-734.61 2090.62,-727.27 1995.57,-727.27 1900.53,-727.27 1823.32,-734.61 1823.32,-743.64"/>
<text xml:space="preserve" text-anchor="start" x="1921.07" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="1939.94" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="1843.38" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change log.</text>
<text xml:space="preserve" text-anchor="start" x="1930.95" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One file to back up.</text>
</g>
<!-- files -->
<g id="node4" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2177.82,-1033.64C2177.82,-1042.67 2096.13,-1050 1995.57,-1050 1895.01,-1050 1813.32,-1042.67 1813.32,-1033.64 1813.32,-1033.64 1813.32,-886.36 1813.32,-886.36 1813.32,-877.33 1895.01,-870 1995.57,-870 2096.13,-870 2177.82,-877.33 2177.82,-886.36 2177.82,-886.36 2177.82,-1033.64 2177.82,-1033.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2177.82,-1033.64C2177.82,-1024.61 2096.13,-1017.27 1995.57,-1017.27 1895.01,-1017.27 1813.32,-1024.61 1813.32,-1033.64"/>
<text xml:space="preserve" text-anchor="start" x="1954.45" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="1947.17" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="1833.38" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars and venue maps, re&#45;encoded on upload,</text>
<text xml:space="preserve" text-anchor="start" x="1934.3" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">immutable names.</text>
</g>
<!-- attendee -->
<g id="node5" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-1191 0,-1191 0,-1011 361.12,-1011 361.12,-1191"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-1122" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1099" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="42.97" y="-1081" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, keeps a personal agenda, arranges</text>
<text xml:space="preserve" text-anchor="start" x="153.05" y="-1063" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1s.</text>
</g>
<!-- organizer -->
<g id="node6" class="node">
<title>organizer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="347.36,-901 13.76,-901 13.76,-721 347.36,-721 347.36,-901"/>
<text xml:space="preserve" text-anchor="start" x="136.65" y="-832" font-family="Arial" font-size="20.00" fill="#eff6ff">Organizer</text>
<text xml:space="preserve" text-anchor="start" x="37.14" y="-809" font-family="Arial" font-size="15.00" fill="#bfdbfe">Configures an event: days, places, phases,</text>
<text xml:space="preserve" text-anchor="start" x="33.82" y="-791" font-family="Arial" font-size="15.00" fill="#bfdbfe">booking rules, fixtures. Moderates. A role on</text>
<text xml:space="preserve" text-anchor="start" x="79.24" y="-773" font-family="Arial" font-size="15.00" fill="#bfdbfe">a person, not a separate login.</text>
</g>
<!-- siteadmin -->
<g id="node7" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="340.7,-611 20.42,-611 20.42,-431 340.7,-431 340.7,-611"/>
<text xml:space="preserve" text-anchor="start" x="133.31" y="-533" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="40.48" y="-510" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, people,</text>
<text xml:space="preserve" text-anchor="start" x="115.94" y="-492" font-family="Arial" font-size="15.00" fill="#bfdbfe">events, API tokens.</text>
</g>
<!-- bot -->
<g id="node8" class="node">
<title>bot</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="983.81,-1331 663.77,-1331 663.77,-1151 983.81,-1151 983.81,-1331"/>
<text xml:space="preserve" text-anchor="start" x="753.75" y="-1253" font-family="Arial" font-size="20.00" fill="#eff6ff">Bot / integration</text>
<text xml:space="preserve" text-anchor="start" x="687.88" y="-1230" font-family="Arial" font-size="15.00" fill="#bfdbfe">A script or chat bot holding an API token.</text>
<text xml:space="preserve" text-anchor="start" x="705.82" y="-1212" font-family="Arial" font-size="15.00" fill="#bfdbfe">Same API, same rules as a person.</text>
</g>
<!-- pushservice -->
<g id="node9" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2155.59,-180 1835.55,-180 1835.55,0 2155.59,0 2155.59,-180"/>
<text xml:space="preserve" text-anchor="start" x="1894.98" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="1855.91" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="1966.81" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- reverseproxy -->
<g id="node10" class="node">
<title>reverseproxy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="983.81,-1621 663.77,-1621 663.77,-1441 983.81,-1441 983.81,-1621"/>
<text xml:space="preserve" text-anchor="start" x="759.32" y="-1543" font-family="Arial" font-size="20.00" fill="#f8fafc">Reverse proxy</text>
<text xml:space="preserve" text-anchor="start" x="702.07" y="-1520" font-family="Arial" font-size="15.00" fill="#cbd5e1">Terminates TLS. Not part of the app;</text>
<text xml:space="preserve" text-anchor="start" x="728.75" y="-1502" font-family="Arial" font-size="15.00" fill="#cbd5e1">documented for self&#45;hosters.</text>
</g>
<!-- smtp -->
<g id="node11" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2155.59,-470 1835.55,-470 1835.55,-290 2155.59,-290 2155.59,-470"/>
<text xml:space="preserve" text-anchor="start" x="1931.66" y="-383" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="1939.31" y="-360" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- chatplatform -->
<g id="node12" class="node">
<title>chatplatform</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2168.62,-1340 1822.53,-1340 1822.53,-1160 2168.62,-1160 2168.62,-1340"/>
<text xml:space="preserve" text-anchor="start" x="1935.55" y="-1262" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat platform</text>
<text xml:space="preserve" text-anchor="start" x="1842.58" y="-1239" font-family="Arial" font-size="15.00" fill="#cbd5e1">Telegram, Matrix or Signal — reached through</text>
<text xml:space="preserve" text-anchor="start" x="1933.44" y="-1221" font-family="Arial" font-size="15.00" fill="#cbd5e1">a channel adapter.</text>
</g>
<!-- web&#45;&gt;server -->
<g id="edge7" class="edge">
<title>web&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M983.43,-811C1056.93,-811 1144.71,-811 1221.12,-811"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1220.82,-813.63 1228.32,-811 1220.82,-808.38 1220.82,-813.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.01,-811 1094.01,-833.8 1121,-833.8 1121,-811 1094.01,-811"/>
<text xml:space="preserve" text-anchor="start" x="1097.01" y="-819.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge9" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1581.25,-741.78C1601.38,-735.1 1621.76,-728.92 1641.49,-723.8 1696.3,-709.58 1756.93,-698.66 1812.26,-690.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1812.49,-693.11 1819.53,-689.44 1811.73,-687.92 1812.49,-693.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1643.05,-723.8 1643.05,-767 1751.77,-767 1751.77,-723.8 1643.05,-723.8"/>
<text xml:space="preserve" text-anchor="start" x="1646.05" y="-750" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="1646.05" y="-729.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- server&#45;&gt;files -->
<g id="edge10" class="edge">
<title>server&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1581.15,-855.1C1650.76,-872.76 1731.21,-893.18 1802.54,-911.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1801.69,-913.77 1809.61,-913.07 1802.98,-908.68 1801.69,-913.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1648.88,-894.42 1648.88,-917.22 1745.93,-917.22 1745.93,-894.42 1648.88,-894.42"/>
<text xml:space="preserve" text-anchor="start" x="1651.88" y="-900.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- server&#45;&gt;pushservice -->
<g id="edge8" class="edge">
<title>server&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1459.64,-721.07C1530.96,-602.53 1666.71,-390.81 1813.32,-235 1829.03,-218.31 1846.7,-201.88 1864.7,-186.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1866.1,-188.67 1870.11,-181.81 1862.7,-184.66 1866.1,-188.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1641.49,-444.51 1641.49,-467.31 1753.32,-467.31 1753.32,-444.51 1641.49,-444.51"/>
<text xml:space="preserve" text-anchor="start" x="1644.49" y="-450.31" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- server&#45;&gt;smtp -->
<g id="edge11" class="edge">
<title>server&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1529.92,-721.02C1610.47,-661.89 1718.17,-582.84 1813.32,-513 1829.68,-500.99 1846.87,-488.38 1863.88,-475.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1865.28,-478.13 1869.77,-471.57 1862.17,-473.89 1865.28,-478.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1657.06,-635.77 1657.06,-658.57 1737.76,-658.57 1737.76,-635.77 1657.06,-635.77"/>
<text xml:space="preserve" text-anchor="start" x="1660.06" y="-641.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- server&#45;&gt;chatplatform -->
<g id="edge12" class="edge">
<title>server&#45;&gt;chatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1511.38,-900.78C1591.78,-968.67 1706.94,-1062.73 1813.32,-1138 1821.06,-1143.47 1829.05,-1148.97 1837.19,-1154.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1835.49,-1156.45 1843.19,-1158.43 1838.4,-1152.09 1835.49,-1156.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1641.88,-1087.7 1641.88,-1110.5 1752.93,-1110.5 1752.93,-1087.7 1641.88,-1087.7"/>
<text xml:space="preserve" text-anchor="start" x="1644.88" y="-1093.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends messages</text>
</g>
<!-- attendee&#45;&gt;web -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M361.03,-1019.83C452.91,-978.28 564.1,-927.99 654.35,-887.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="655.34,-889.61 661.1,-884.13 653.18,-884.83 655.34,-889.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438.23,-990.5 438.23,-1013.3 586.66,-1013.3 586.66,-990.5 438.23,-990.5"/>
<text xml:space="preserve" text-anchor="start" x="441.23" y="-996.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- organizer&#45;&gt;web -->
<g id="edge2" class="edge">
<title>organizer&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M347.11,-811C441.27,-811 558.94,-811 653.69,-811"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="653.42,-813.63 660.92,-811 653.42,-808.38 653.42,-813.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="421.12,-811 421.12,-833.8 603.77,-833.8 603.77,-811 421.12,-811"/>
<text xml:space="preserve" text-anchor="start" x="424.12" y="-816.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">configures event, moderates</text>
</g>
<!-- siteadmin&#45;&gt;web -->
<g id="edge3" class="edge">
<title>siteadmin&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M340.48,-592.87C435.96,-636.06 557.37,-690.96 654.48,-734.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="653.13,-737.15 661.05,-737.85 655.3,-732.37 653.13,-737.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438.63,-708.92 438.63,-731.72 586.26,-731.72 586.26,-708.92 438.63,-708.92"/>
<text xml:space="preserve" text-anchor="start" x="441.63" y="-714.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- bot&#45;&gt;server -->
<g id="edge4" class="edge">
<title>bot&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M964.86,-1151.23C971.3,-1146.8 977.64,-1142.38 983.81,-1138 1088.63,-1063.6 1203.67,-973.77 1287.06,-907.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1288.45,-909.36 1292.67,-902.62 1285.17,-905.26 1288.45,-909.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1043.81,-1086.74 1043.81,-1129.94 1171.2,-1129.94 1171.2,-1086.74 1043.81,-1086.74"/>
<text xml:space="preserve" text-anchor="start" x="1046.81" y="-1112.94" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls with API token</text>
<text xml:space="preserve" text-anchor="start" x="1046.81" y="-1092.14" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- pushservice&#45;&gt;web -->
<g id="edge5" class="edge">
<title>pushservice&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1835.71,-171.9C1774.39,-204.44 1704.07,-242.91 1641.49,-280 1398.52,-424.03 1124.97,-606.13 964.16,-715.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="962.87,-713.03 958.14,-719.42 965.82,-717.38 962.87,-713.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1362.1,-531.45 1362.1,-554.25 1450.59,-554.25 1450.59,-531.45 1362.1,-531.45"/>
<text xml:space="preserve" text-anchor="start" x="1365.1" y="-537.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
<!-- reverseproxy&#45;&gt;server -->
<g id="edge6" class="edge">
<title>reverseproxy&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M927.84,-1441.09C946.92,-1423.31 966.33,-1404.44 983.81,-1386 1128.88,-1232.96 1267.55,-1028.96 1344.09,-909.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1346.26,-911.09 1348.09,-903.36 1341.83,-908.26 1346.26,-911.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1052.77,-1314.02 1052.77,-1336.82 1162.24,-1336.82 1162.24,-1314.02 1052.77,-1314.02"/>
<text xml:space="preserve" text-anchor="start" x="1055.77" y="-1319.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards HTTPS</text>
</g>
</g>
</svg>
`;case`server`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3596pt" height="2175pt"
 viewBox="0.00 0.00 3596.00 2175.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2160.05)">
<g id="clust1" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-261 8,-1853.8 2305,-1853.8 2305,-261 8,-261"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1840.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- http -->
<g id="node1" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1346.98,-1792.6 995.02,-1792.6 995.02,-1612.6 1346.98,-1612.6 1346.98,-1792.6"/>
<text xml:space="preserve" text-anchor="start" x="1126" y="-1733.4" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1133.78" y="-1712.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1015.07" y="-1690.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1045.94" y="-1672.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Auth, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1095.97" y="-1654.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node2" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1818.57,-1792.6 1457.43,-1792.6 1457.43,-1612.6 1818.57,-1612.6 1818.57,-1792.6"/>
<text xml:space="preserve" text-anchor="start" x="1580.73" y="-1733.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1624.99" y="-1712.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="1503.78" y="-1690.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="1477.49" y="-1672.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="1580.05" y="-1654.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node3" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2265.45,-1792.6 1928.55,-1792.6 1928.55,-1612.6 2265.45,-1612.6 2265.45,-1792.6"/>
<text xml:space="preserve" text-anchor="start" x="2075.88" y="-1723.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="1949.82" y="-1700.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single scheduler loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="1948.61" y="-1682.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">scheduled work (reminders, lapses), delivery</text>
<text xml:space="preserve" text-anchor="start" x="1996.11" y="-1664.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">attempts. Leased, idempotent.</text>
</g>
<!-- mpersonal -->
<g id="node4" class="node">
<title>mpersonal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="436.36,-1792.6 103.64,-1792.6 103.64,-1612.6 436.36,-1612.6 436.36,-1792.6"/>
<text xml:space="preserve" text-anchor="start" x="231.64" y="-1714.6" font-family="Arial" font-size="20.00" fill="#eff6ff">personal</text>
<text xml:space="preserve" text-anchor="start" x="123.69" y="-1691.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Private marks (star, hide, note) on sessions,</text>
<text xml:space="preserve" text-anchor="start" x="151.59" y="-1673.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">proposals and people. Preferences.</text>
</g>
<!-- midentity -->
<g id="node5" class="node">
<title>midentity</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="794.62,-1126.6 449.38,-1126.6 449.38,-946.6 794.62,-946.6 794.62,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="590.32" y="-1048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">identity</text>
<text xml:space="preserve" text-anchor="start" x="469.44" y="-1025.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Join links, email codes, passkeys, passwords,</text>
<text xml:space="preserve" text-anchor="start" x="511.95" y="-1007.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">login sessions, API tokens, roles.</text>
</g>
<!-- mnotifications -->
<g id="node6" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2255.72,-1469.8 1916.28,-1469.8 1916.28,-1289.8 2255.72,-1289.8 2255.72,-1469.8"/>
<text xml:space="preserve" text-anchor="start" x="2033.19" y="-1400.8" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="1936.34" y="-1377.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notification records, per&#45;channel preferences</text>
<text xml:space="preserve" text-anchor="start" x="1938.41" y="-1359.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">and bindings, delivery log. Channels: in&#45;app,</text>
<text xml:space="preserve" text-anchor="start" x="2027.22" y="-1341.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">email, push, chat.</text>
</g>
<!-- mproposals -->
<g id="node7" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1225.02,-1126.6 904.98,-1126.6 904.98,-946.6 1225.02,-946.6 1225.02,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="1021.64" y="-1048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="937.86" y="-1025.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, votes, proposal comments,</text>
<text xml:space="preserve" text-anchor="start" x="991.2" y="-1007.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendance prediction.</text>
</g>
<!-- mscheduling -->
<g id="node8" class="node">
<title>mscheduling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1655.02,-1126.6 1334.98,-1126.6 1334.98,-946.6 1655.02,-946.6 1655.02,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="1447.19" y="-1057.6" font-family="Arial" font-size="20.00" fill="#eff6ff">scheduling</text>
<text xml:space="preserve" text-anchor="start" x="1365.79" y="-1034.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions (kinds: session, shift, fixture),</text>
<text xml:space="preserve" text-anchor="start" x="1355.77" y="-1016.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">RSVPs, booking rules, reserved windows,</text>
<text xml:space="preserve" text-anchor="start" x="1465.4" y="-998.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">capacity.</text>
</g>
<!-- mmeetings -->
<g id="node9" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2250.02,-1126.6 1929.98,-1126.6 1929.98,-946.6 2250.02,-946.6 2250.02,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="2049.42" y="-1048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="1967.85" y="-1025.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="2039.97" y="-1007.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings, lapse.</text>
</g>
<!-- kernel -->
<g id="node10" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1468.38,-803.8 1135.62,-803.8 1135.62,-623.8 1468.38,-623.8 1468.38,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="1273.09" y="-734.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="1165.69" y="-711.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, clock, ids, actor</text>
<text xml:space="preserve" text-anchor="start" x="1155.68" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">context, errors. The only code every module</text>
<text xml:space="preserve" text-anchor="start" x="1262.83" y="-675.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">may import.</text>
</g>
<!-- mvenue -->
<g id="node11" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1898.02,-803.8 1577.98,-803.8 1577.98,-623.8 1898.02,-623.8 1898.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="1710.75" y="-725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="1609.61" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Places (rooms, areas, meeting points),</text>
<text xml:space="preserve" text-anchor="start" x="1646.71" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">floors, directions, map pins.</text>
</g>
<!-- mpeople -->
<g id="node12" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-803.8 47.98,-803.8 47.98,-623.8 368.02,-623.8 368.02,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="177.97" y="-725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="73.35" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Persons, participation in events, profiles,</text>
<text xml:space="preserve" text-anchor="start" x="125.05" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">profile comments, labels.</text>
</g>
<!-- mevents -->
<g id="node13" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="903.02,-481 582.98,-481 582.98,-301 903.02,-301 903.02,-481"/>
<text xml:space="preserve" text-anchor="start" x="713.54" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="605.01" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Event, days, phases, timezone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="715.07" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings.</text>
</g>
<!-- bot -->
<g id="node14" class="node">
<title>bot</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1045.02,-2145 724.98,-2145 724.98,-1965 1045.02,-1965 1045.02,-2145"/>
<text xml:space="preserve" text-anchor="start" x="814.96" y="-2067" font-family="Arial" font-size="20.00" fill="#eff6ff">Bot / integration</text>
<text xml:space="preserve" text-anchor="start" x="749.09" y="-2044" font-family="Arial" font-size="15.00" fill="#bfdbfe">A script or chat bot holding an API token.</text>
<text xml:space="preserve" text-anchor="start" x="767.03" y="-2026" font-family="Arial" font-size="15.00" fill="#bfdbfe">Same API, same rules as a person.</text>
</g>
<!-- web -->
<g id="node15" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1475.02,-2145 1154.98,-2145 1154.98,-1965 1475.02,-1965 1475.02,-2145"/>
<text xml:space="preserve" text-anchor="start" x="1274.98" y="-2076.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="1230.11" y="-2055.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="1177.42" y="-2034.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1188.28" y="-2016.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- db -->
<g id="node16" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M683.25,-163.64C683.25,-172.67 606.04,-180 511,-180 415.96,-180 338.75,-172.67 338.75,-163.64 338.75,-163.64 338.75,-16.36 338.75,-16.36 338.75,-7.33 415.96,0 511,0 606.04,0 683.25,-7.33 683.25,-16.36 683.25,-16.36 683.25,-163.64 683.25,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M683.25,-163.64C683.25,-154.61 606.04,-147.27 511,-147.27 415.96,-147.27 338.75,-154.61 338.75,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="436.5" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="455.37" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="358.81" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change log.</text>
<text xml:space="preserve" text-anchor="start" x="446.38" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One file to back up.</text>
</g>
<!-- files -->
<g id="node17" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M1157.25,-163.64C1157.25,-172.67 1075.56,-180 975,-180 874.44,-180 792.75,-172.67 792.75,-163.64 792.75,-163.64 792.75,-16.36 792.75,-16.36 792.75,-7.33 874.44,0 975,0 1075.56,0 1157.25,-7.33 1157.25,-16.36 1157.25,-16.36 1157.25,-163.64 1157.25,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M1157.25,-163.64C1157.25,-154.61 1075.56,-147.27 975,-147.27 874.44,-147.27 792.75,-154.61 792.75,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="933.88" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="926.6" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="812.81" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars and venue maps, re&#45;encoded on upload,</text>
<text xml:space="preserve" text-anchor="start" x="913.73" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">immutable names.</text>
</g>
<!-- smtp -->
<g id="node18" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3566.02,-1126.6 3245.98,-1126.6 3245.98,-946.6 3566.02,-946.6 3566.02,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="3342.09" y="-1039.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="3349.74" y="-1016.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node19" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2680.02,-1126.6 2359.98,-1126.6 2359.98,-946.6 2680.02,-946.6 2680.02,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="2419.41" y="-1048.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="2380.33" y="-1025.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="2491.23" y="-1007.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- chatplatform -->
<g id="node20" class="node">
<title>chatplatform</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3136.04,-1126.6 2789.96,-1126.6 2789.96,-946.6 3136.04,-946.6 3136.04,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="2902.98" y="-1048.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat platform</text>
<text xml:space="preserve" text-anchor="start" x="2810.01" y="-1025.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Telegram, Matrix or Signal — reached through</text>
<text xml:space="preserve" text-anchor="start" x="2900.87" y="-1007.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">a channel adapter.</text>
</g>
<!-- http&#45;&gt;midentity -->
<g id="edge4" class="edge">
<title>http&#45;&gt;midentity</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M995.19,-1654.98C896.74,-1619.91 780,-1561.74 709.72,-1469.8 636.21,-1373.65 620.04,-1231.45 618.42,-1136.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="621.05,-1136.78 618.33,-1129.31 615.8,-1136.84 621.05,-1136.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="709.72,-1368.4 709.72,-1391.2 799,-1391.2 799,-1368.4 709.72,-1368.4"/>
<text xml:space="preserve" text-anchor="start" x="712.72" y="-1374.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">authenticates</text>
</g>
<!-- http&#45;&gt;mproposals -->
<g id="edge5" class="edge">
<title>http&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1156.81,-1612.74C1137.07,-1489.05 1101.41,-1265.68 1080.82,-1136.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1083.44,-1136.45 1079.66,-1129.45 1078.25,-1137.27 1083.44,-1136.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1133.69,-1368.4 1133.69,-1391.2 1254.08,-1391.2 1254.08,-1368.4 1133.69,-1368.4"/>
<text xml:space="preserve" text-anchor="start" x="1136.69" y="-1374.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- http&#45;&gt;mscheduling -->
<g id="edge6" class="edge">
<title>http&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1214.36,-1612.74C1274.9,-1488.67 1384.36,-1264.33 1447.2,-1135.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1449.38,-1137.08 1450.31,-1129.18 1444.66,-1134.77 1449.38,-1137.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1370.5,-1368.4 1370.5,-1391.2 1490.89,-1391.2 1490.89,-1368.4 1370.5,-1368.4"/>
<text xml:space="preserve" text-anchor="start" x="1373.5" y="-1374.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- feed&#45;&gt;kernel -->
<g id="edge7" class="edge">
<title>feed&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1659.81,-1612.89C1700.75,-1437.76 1779,-1055.15 1710,-946.6 1676.3,-893.58 1637.31,-916.41 1582,-886.6 1537.97,-862.87 1491.24,-835.23 1448.83,-809.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1450.47,-807.08 1442.71,-805.37 1447.71,-811.55 1450.47,-807.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1733.13,-1196.8 1733.13,-1219.6 1846.54,-1219.6 1846.54,-1196.8 1733.13,-1196.8"/>
<text xml:space="preserve" text-anchor="start" x="1736.13" y="-1202.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads change log</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge8" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2093.95,-1612.67C2092.54,-1571.47 2090.85,-1522.36 2089.4,-1479.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2092.03,-1480.06 2089.15,-1472.65 2086.78,-1480.24 2092.03,-1480.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2091.83,-1529.8 2091.83,-1552.6 2276.04,-1552.6 2276.04,-1529.8 2091.83,-1529.8"/>
<text xml:space="preserve" text-anchor="start" x="2094.83" y="-1535.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs reactions and deliveries</text>
</g>
<!-- mpersonal&#45;&gt;mproposals -->
<g id="edge9" class="edge">
<title>mpersonal&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M293.25,-1612.96C321.46,-1521.16 377.3,-1378.92 471.26,-1289.8 479.62,-1281.87 722.8,-1179.83 895.3,-1108.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="896.3,-1110.44 902.22,-1105.13 894.28,-1105.59 896.3,-1110.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="471.26,-1368.4 471.26,-1391.2 608,-1391.2 608,-1368.4 471.26,-1368.4"/>
<text xml:space="preserve" text-anchor="start" x="474.26" y="-1374.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">references proposals</text>
</g>
<!-- mpersonal&#45;&gt;mscheduling -->
<g id="edge10" class="edge">
<title>mpersonal&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M436.36,-1650.88C550.57,-1611.6 702.51,-1550.32 822,-1469.8 915.55,-1406.76 909.81,-1356.27 1000.95,-1289.8 1101.57,-1216.41 1226.62,-1152.8 1325.73,-1107.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1326.72,-1110.26 1332.48,-1104.78 1324.56,-1105.48 1326.72,-1110.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1000.95,-1358.2 1000.95,-1401.4 1079,-1401.4 1079,-1358.2 1000.95,-1358.2"/>
<text xml:space="preserve" text-anchor="start" x="1003.95" y="-1386.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="1003.95" y="-1363.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mpersonal&#45;&gt;mpeople -->
<g id="edge11" class="edge">
<title>mpersonal&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M264.42,-1612.72C252.85,-1428.62 226.34,-1006.73 214.24,-814.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="216.86,-813.99 213.77,-806.67 211.62,-814.32 216.86,-813.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="239.72,-1196.8 239.72,-1219.6 365.56,-1219.6 365.56,-1196.8 239.72,-1196.8"/>
<text xml:space="preserve" text-anchor="start" x="242.72" y="-1202.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">references persons</text>
</g>
<!-- midentity&#45;&gt;mpeople -->
<g id="edge12" class="edge">
<title>midentity&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M507.23,-946.67C452.37,-904.16 386.66,-853.24 330.8,-809.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="332.57,-808 325.03,-805.48 329.35,-812.15 332.57,-808"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="427.41,-863.8 427.41,-886.6 539.24,-886.6 539.24,-863.8 427.41,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="430.41" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">resolves persons</text>
</g>
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge13" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1916.41,-1335.86C1810.6,-1308.01 1671.97,-1269.61 1550.95,-1229.8 1428.54,-1189.54 1399.75,-1174.18 1280,-1126.6 1265.15,-1120.7 1249.77,-1114.5 1234.35,-1108.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1235.5,-1105.87 1227.56,-1105.47 1233.52,-1110.73 1235.5,-1105.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1550.95,-1186.6 1550.95,-1229.8 1629,-1229.8 1629,-1186.6 1550.95,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="1553.95" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1553.95" y="-1192" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mscheduling -->
<g id="edge14" class="edge">
<title>mnotifications&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2005.41,-1289.96C1969.63,-1254.33 1925.38,-1215.05 1880,-1186.6 1813.74,-1145.06 1734.02,-1111.86 1664.35,-1087.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1665.39,-1085.02 1657.45,-1085.04 1663.67,-1089.98 1665.39,-1085.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1936.14,-1186.6 1936.14,-1229.8 2014.19,-1229.8 2014.19,-1186.6 1936.14,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="1939.14" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1939.14" y="-1192" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge15" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2087.04,-1290.04C2087.59,-1243.14 2088.27,-1185.41 2088.83,-1137"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2091.46,-1137.06 2088.92,-1129.53 2086.21,-1137 2091.46,-1137.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2088.24,-1186.6 2088.24,-1229.8 2166.29,-1229.8 2166.29,-1186.6 2088.24,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="2091.24" y="-1212.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="2091.24" y="-1192" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;smtp -->
<g id="edge16" class="edge">
<title>mnotifications&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2255.44,-1349.31C2474.35,-1309.13 2865.94,-1230.16 3191,-1126.6 3205.98,-1121.83 3221.38,-1116.45 3236.72,-1110.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3237.32,-1113.33 3243.42,-1108.24 3235.48,-1108.42 3237.32,-1113.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2983,-1196.8 2983,-1219.6 3063.7,-1219.6 3063.7,-1196.8 2983,-1196.8"/>
<text xml:space="preserve" text-anchor="start" x="2986" y="-1202.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- mnotifications&#45;&gt;pushservice -->
<g id="edge17" class="edge">
<title>mnotifications&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2199.18,-1289.82C2260.6,-1241.54 2336.53,-1181.84 2399.11,-1132.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2400.41,-1134.96 2404.68,-1128.26 2397.16,-1130.83 2400.41,-1134.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2328.98,-1196.8 2328.98,-1219.6 2440.82,-1219.6 2440.82,-1196.8 2328.98,-1196.8"/>
<text xml:space="preserve" text-anchor="start" x="2331.98" y="-1202.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- mnotifications&#45;&gt;chatplatform -->
<g id="edge18" class="edge">
<title>mnotifications&#45;&gt;chatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2255.47,-1313.02C2386.44,-1262.17 2572.23,-1189.99 2735,-1126.6 2749.76,-1120.85 2765.05,-1114.89 2780.4,-1108.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2781.12,-1111.44 2787.15,-1106.27 2779.21,-1106.55 2781.12,-1111.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2574.79,-1196.8 2574.79,-1219.6 2685.84,-1219.6 2685.84,-1196.8 2574.79,-1196.8"/>
<text xml:space="preserve" text-anchor="start" x="2577.79" y="-1202.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends messages</text>
</g>
<!-- mproposals&#45;&gt;mevents -->
<g id="edge19" class="edge">
<title>mproposals&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M905.15,-961.97C808.09,-913.6 697.84,-850.82 670.95,-803.8 615.49,-706.84 652.75,-577.64 691.29,-490"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="693.6,-491.27 694.27,-483.35 688.81,-489.13 693.6,-491.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="670.95,-702.4 670.95,-725.2 761,-725.2 761,-702.4 670.95,-702.4"/>
<text xml:space="preserve" text-anchor="start" x="673.95" y="-708.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases</text>
</g>
<!-- mscheduling&#45;&gt;kernel -->
<g id="edge20" class="edge">
<title>mscheduling&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1432.95,-946.72C1419.88,-927.15 1406.44,-906.36 1394.5,-886.6 1380.28,-863.08 1365.78,-837.21 1352.61,-812.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1354.93,-811.61 1349.07,-806.25 1350.31,-814.1 1354.93,-811.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1394.5,-863.8 1394.5,-886.6 1504,-886.6 1504,-863.8 1394.5,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="1397.5" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">records changes</text>
</g>
<!-- mscheduling&#45;&gt;mvenue -->
<g id="edge21" class="edge">
<title>mscheduling&#45;&gt;mvenue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1562.37,-946.67C1594.1,-904.77 1632.03,-854.7 1664.51,-811.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1666.45,-813.61 1668.89,-806.04 1662.26,-810.44 1666.45,-813.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1623.79,-863.8 1623.79,-886.6 1709.17,-886.6 1709.17,-863.8 1623.79,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="1626.79" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads places</text>
</g>
<!-- mscheduling&#45;&gt;mevents -->
<g id="edge22" class="edge">
<title>mscheduling&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1335.21,-968.72C1178.28,-902.8 961.2,-810.9 953.59,-803.8 861.44,-717.73 803.11,-582.31 771.77,-490.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="774.3,-489.74 769.42,-483.47 769.32,-491.42 774.3,-489.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="953.59,-702.4 953.59,-725.2 1081,-725.2 1081,-702.4 953.59,-702.4"/>
<text xml:space="preserve" text-anchor="start" x="956.59" y="-708.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases, days</text>
</g>
<!-- mmeetings&#45;&gt;mvenue -->
<g id="edge23" class="edge">
<title>mmeetings&#45;&gt;mvenue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2041.2,-946.7C2023.04,-918.24 2000.75,-887.9 1976,-863.8 1955.13,-843.48 1931.04,-824.53 1906.37,-807.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1908.16,-805.46 1900.49,-803.39 1905.2,-809.79 1908.16,-805.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1995.14,-863.8 1995.14,-886.6 2080.52,-886.6 2080.52,-863.8 1995.14,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="1998.14" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads places</text>
</g>
<!-- mmeetings&#45;&gt;mpeople -->
<g id="edge24" class="edge">
<title>mmeetings&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1940.06,-946.63C1878.36,-914.5 1804.85,-881.75 1734,-863.8 1180.64,-723.58 1010.59,-916.6 451,-803.8 426.9,-798.94 402.01,-792.1 377.75,-784.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="378.59,-781.85 370.65,-782.01 376.96,-786.84 378.59,-781.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1805.88,-863.8 1805.88,-886.6 1933.28,-886.6 1933.28,-863.8 1805.88,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="1808.88" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads participations</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge25" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2112.3,-947C2115.67,-919.9 2115.8,-890.26 2108,-863.8 2072.09,-742.01 2058.28,-694.8 1953,-623.8 1785.3,-510.71 1204.95,-438.2 913.21,-408.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="913.7,-405.45 905.97,-407.29 913.16,-410.67 913.7,-405.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2089.25,-702.4 2089.25,-725.2 2236.11,-725.2 2236.11,-702.4 2089.25,-702.4"/>
<text xml:space="preserve" text-anchor="start" x="2092.25" y="-708.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases, slot grid</text>
</g>
<!-- mpeople&#45;&gt;mevents -->
<g id="edge26" class="edge">
<title>mpeople&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M296.63,-623.94C328.26,-595.17 365.25,-564.62 402.25,-541 455.22,-507.18 517.17,-477.54 573.61,-453.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="574.28,-456.36 580.19,-451.05 572.26,-451.51 574.28,-456.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="402.25,-541 402.25,-563.8 560,-563.8 560,-541 402.25,-541"/>
<text xml:space="preserve" text-anchor="start" x="405.25" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">participation is per event</text>
</g>
<!-- mevents&#45;&gt;db -->
<g id="edge27" class="edge">
<title>mevents&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M642.91,-261C624.17,-236.86 604.87,-211.98 587.01,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="589.24,-187.56 582.57,-183.24 585.1,-190.78 589.24,-187.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="503.05,-220.87 503.05,-264.07 611.77,-264.07 611.77,-220.87 503.05,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="506.05" y="-247.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="506.05" y="-226.27" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- mevents&#45;&gt;files -->
<g id="edge28" class="edge">
<title>mevents&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M843.09,-261C861.83,-236.86 881.13,-211.98 898.99,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="900.9,-190.78 903.43,-183.24 896.76,-187.56 900.9,-190.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="777.17,-220.87 777.17,-243.67 874.23,-243.67 874.23,-220.87 777.17,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="780.17" y="-226.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- bot&#45;&gt;http -->
<g id="edge1" class="edge">
<title>bot&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M957.54,-1965.13C998.62,-1914.79 1050.05,-1851.78 1092.13,-1800.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1093.91,-1802.19 1096.62,-1794.72 1089.85,-1798.87 1093.91,-1802.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1036.58,-1861.8 1036.58,-1905 1163.96,-1905 1163.96,-1861.8 1036.58,-1861.8"/>
<text xml:space="preserve" text-anchor="start" x="1039.58" y="-1888" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls with API token</text>
<text xml:space="preserve" text-anchor="start" x="1039.58" y="-1867.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- web&#45;&gt;http -->
<g id="edge2" class="edge">
<title>web&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1278.48,-1965.13C1258,-1915.31 1232.43,-1853.08 1211.36,-1801.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1213.91,-1801.12 1208.64,-1795.18 1209.06,-1803.11 1213.91,-1801.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1251.62,-1861.8 1251.62,-1905 1403.15,-1905 1403.15,-1861.8 1251.62,-1861.8"/>
<text xml:space="preserve" text-anchor="start" x="1254.62" y="-1888" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1254.62" y="-1867.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- web&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>web&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1396.92,-1965.13C1443.42,-1914.69 1501.64,-1851.52 1549.22,-1799.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1550.96,-1801.9 1554.11,-1794.6 1547.1,-1798.34 1550.96,-1801.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1486.18,-1861.8 1486.18,-1905 1703.89,-1905 1703.89,-1861.8 1486.18,-1861.8"/>
<text xml:space="preserve" text-anchor="start" x="1489.18" y="-1888" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="1489.18" y="-1867.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
</g>
</g>
</svg>
`;case`modules`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2022pt" height="1199pt"
 viewBox="0.00 0.00 2022.00 1199.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1183.85)">
<!-- midentity -->
<g id="node1" class="node">
<title>midentity</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="345.24,-180 0,-180 0,0 345.24,0 345.24,-180"/>
<text xml:space="preserve" text-anchor="start" x="140.93" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">identity</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Join links, email codes, passkeys, passwords,</text>
<text xml:space="preserve" text-anchor="start" x="62.57" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">login sessions, API tokens, roles.</text>
</g>
<!-- mpeople -->
<g id="node2" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="655.64,-846 335.6,-846 335.6,-666 655.64,-666 655.64,-846"/>
<text xml:space="preserve" text-anchor="start" x="465.59" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="360.97" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">Persons, participation in events, profiles,</text>
<text xml:space="preserve" text-anchor="start" x="412.67" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">profile comments, labels.</text>
</g>
<!-- mpersonal -->
<g id="node3" class="node">
<title>mpersonal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="937.98,-180 605.25,-180 605.25,0 937.98,0 937.98,-180"/>
<text xml:space="preserve" text-anchor="start" x="733.26" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">personal</text>
<text xml:space="preserve" text-anchor="start" x="625.31" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Private marks (star, hide, note) on sessions,</text>
<text xml:space="preserve" text-anchor="start" x="653.21" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">proposals and people. Preferences.</text>
</g>
<!-- mproposals -->
<g id="node4" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1060.64,-523.2 740.6,-523.2 740.6,-343.2 1060.64,-343.2 1060.64,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="857.26" y="-445.2" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="773.48" y="-422.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, votes, proposal comments,</text>
<text xml:space="preserve" text-anchor="start" x="826.82" y="-404.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendance prediction.</text>
</g>
<!-- mscheduling -->
<g id="node5" class="node">
<title>mscheduling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1507.64,-523.2 1187.6,-523.2 1187.6,-343.2 1507.64,-343.2 1507.64,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="1299.81" y="-454.2" font-family="Arial" font-size="20.00" fill="#eff6ff">scheduling</text>
<text xml:space="preserve" text-anchor="start" x="1218.41" y="-431.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions (kinds: session, shift, fixture),</text>
<text xml:space="preserve" text-anchor="start" x="1208.39" y="-413.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">RSVPs, booking rules, reserved windows,</text>
<text xml:space="preserve" text-anchor="start" x="1318.02" y="-395.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">capacity.</text>
</g>
<!-- mnotifications -->
<g id="node6" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1579.33,-180 1239.9,-180 1239.9,0 1579.33,0 1579.33,-180"/>
<text xml:space="preserve" text-anchor="start" x="1356.81" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="1259.96" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notification records, per&#45;channel preferences</text>
<text xml:space="preserve" text-anchor="start" x="1262.03" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">and bindings, delivery log. Channels: in&#45;app,</text>
<text xml:space="preserve" text-anchor="start" x="1350.84" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">email, push, chat.</text>
</g>
<!-- mmeetings -->
<g id="node7" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1948.64,-523.2 1628.6,-523.2 1628.6,-343.2 1948.64,-343.2 1948.64,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="1748.04" y="-445.2" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="1666.47" y="-422.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="1738.59" y="-404.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings, lapse.</text>
</g>
<!-- mevents -->
<g id="node8" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1190.64,-1168.8 870.6,-1168.8 870.6,-988.8 1190.64,-988.8 1190.64,-1168.8"/>
<text xml:space="preserve" text-anchor="start" x="1001.16" y="-1090.8" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="892.63" y="-1067.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Event, days, phases, timezone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1002.69" y="-1049.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings.</text>
</g>
<!-- mvenue -->
<g id="node9" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1742.64,-846 1422.6,-846 1422.6,-666 1742.64,-666 1742.64,-846"/>
<text xml:space="preserve" text-anchor="start" x="1555.37" y="-768" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="1454.23" y="-745" font-family="Arial" font-size="15.00" fill="#bfdbfe">Places (rooms, areas, meeting points),</text>
<text xml:space="preserve" text-anchor="start" x="1491.33" y="-727" font-family="Arial" font-size="15.00" fill="#bfdbfe">floors, directions, map pins.</text>
</g>
<!-- midentity&#45;&gt;mpeople -->
<g id="edge1" class="edge">
<title>midentity&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M211.4,-179.94C250.21,-267.87 312.39,-405.89 370.79,-523.2 392.9,-567.61 418.7,-616.03 441.09,-657.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="438.76,-658.28 444.66,-663.61 443.36,-655.77 438.76,-658.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="370.79,-421.8 370.79,-444.6 482.62,-444.6 482.62,-421.8 370.79,-421.8"/>
<text xml:space="preserve" text-anchor="start" x="373.79" y="-427.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">resolves persons</text>
</g>
<!-- mpeople&#45;&gt;mevents -->
<g id="edge14" class="edge">
<title>mpeople&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M553.04,-845.62C575.67,-875.21 603.73,-906.34 634.87,-928.8 702.11,-977.3 787.04,-1012.01 860.96,-1035.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="860.02,-1038.1 867.97,-1037.86 861.6,-1033.1 860.02,-1038.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="634.87,-906 634.87,-928.8 792.62,-928.8 792.62,-906 634.87,-906"/>
<text xml:space="preserve" text-anchor="start" x="637.87" y="-911.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">participation is per event</text>
</g>
<!-- mpersonal&#45;&gt;mpeople -->
<g id="edge4" class="edge">
<title>mpersonal&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M676.29,-179.73C633.89,-224.63 587.4,-282.42 559.78,-343.2 514.25,-443.37 500.17,-569.84 496.25,-656.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="493.63,-655.7 495.94,-663.3 498.88,-655.92 493.63,-655.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.78,-421.8 559.78,-444.6 685.62,-444.6 685.62,-421.8 559.78,-421.8"/>
<text xml:space="preserve" text-anchor="start" x="562.78" y="-427.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">references persons</text>
</g>
<!-- mpersonal&#45;&gt;mproposals -->
<g id="edge2" class="edge">
<title>mpersonal&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M743.5,-179.73C737.49,-213.21 736.42,-250.97 749.88,-283.2 757.74,-302.02 769.27,-319.68 782.5,-335.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="780.3,-337.26 787.16,-341.27 784.3,-333.86 780.3,-337.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="749.88,-250.2 749.88,-273 886.62,-273 886.62,-250.2 749.88,-250.2"/>
<text xml:space="preserve" text-anchor="start" x="752.88" y="-256" font-family="Arial" font-size="14.00" fill="#c9c9c9">references proposals</text>
</g>
<!-- mpersonal&#45;&gt;mscheduling -->
<g id="edge3" class="edge">
<title>mpersonal&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M875.12,-179.94C918.17,-214.58 969.67,-253.09 1019.57,-283.2 1069.33,-313.23 1126.19,-341.09 1178.44,-364.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1177.11,-366.68 1185.03,-367.32 1179.24,-361.88 1177.11,-366.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1019.57,-240 1019.57,-283.2 1097.62,-283.2 1097.62,-240 1019.57,-240"/>
<text xml:space="preserve" text-anchor="start" x="1022.57" y="-268.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="1022.57" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mproposals&#45;&gt;mevents -->
<g id="edge8" class="edge">
<title>mproposals&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M908.91,-522.91C917.74,-606.81 933.88,-735.93 958.56,-846 968.49,-890.26 982.8,-938.27 996.06,-979.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="993.55,-979.81 998.38,-986.12 998.54,-978.18 993.55,-979.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="958.56,-744.6 958.56,-767.4 1048.62,-767.4 1048.62,-744.6 958.56,-744.6"/>
<text xml:space="preserve" text-anchor="start" x="961.56" y="-750.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases</text>
</g>
<!-- mscheduling&#45;&gt;mevents -->
<g id="edge10" class="edge">
<title>mscheduling&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1303.87,-523.01C1244.89,-642.78 1140.19,-855.34 1078.94,-979.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1076.72,-978.26 1075.76,-986.15 1081.43,-980.58 1076.72,-978.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1230.94,-744.6 1230.94,-767.4 1358.35,-767.4 1358.35,-744.6 1230.94,-744.6"/>
<text xml:space="preserve" text-anchor="start" x="1233.94" y="-750.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases, days</text>
</g>
<!-- mscheduling&#45;&gt;mvenue -->
<g id="edge9" class="edge">
<title>mscheduling&#45;&gt;mvenue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1321.84,-522.8C1318.45,-550.92 1320.16,-581.14 1334.24,-606 1352.95,-639.04 1382.23,-665.55 1414.21,-686.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1412.55,-688.57 1420.29,-690.37 1415.37,-684.13 1412.55,-688.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1334.24,-583.2 1334.24,-606 1419.62,-606 1419.62,-583.2 1334.24,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="1337.24" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads places</text>
</g>
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge5" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1276.88,-179.98C1204.56,-228.46 1115.07,-288.45 1041.51,-337.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1040.36,-335.37 1035.59,-341.72 1043.28,-339.73 1040.36,-335.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1185.59,-240 1185.59,-283.2 1263.65,-283.2 1263.65,-240 1185.59,-240"/>
<text xml:space="preserve" text-anchor="start" x="1188.59" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1188.59" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mscheduling -->
<g id="edge6" class="edge">
<title>mnotifications&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1393.49,-179.76C1384.95,-226.76 1374.43,-284.63 1365.63,-333.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1363.07,-332.47 1364.32,-340.32 1368.24,-333.41 1363.07,-332.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1382.33,-240 1382.33,-283.2 1460.38,-283.2 1460.38,-240 1382.33,-240"/>
<text xml:space="preserve" text-anchor="start" x="1385.33" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1385.33" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge7" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1508.21,-179.76C1561.62,-227.84 1627.67,-287.3 1682.24,-336.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1680.29,-338.2 1687.62,-341.27 1683.8,-334.3 1680.29,-338.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1621.81,-240 1621.81,-283.2 1699.86,-283.2 1699.86,-240 1621.81,-240"/>
<text xml:space="preserve" text-anchor="start" x="1624.81" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1624.81" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mmeetings&#45;&gt;mpeople -->
<g id="edge12" class="edge">
<title>mmeetings&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1640.27,-523.19C1580.82,-554.7 1510.43,-587.02 1442.62,-606 1140.22,-690.65 1045.21,-598.07 738.62,-666 714.62,-671.32 689.78,-678.43 665.55,-686.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="664.75,-683.82 658.45,-688.67 666.4,-688.81 664.75,-683.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1502.46,-583.2 1502.46,-606 1629.86,-606 1629.86,-583.2 1502.46,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="1505.46" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads participations</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge13" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1820.16,-523.02C1846.28,-613.97 1868.79,-754.59 1797.62,-846 1724.14,-940.38 1403.26,-1012.56 1200.53,-1049.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1200.25,-1047.16 1193.34,-1051.09 1201.19,-1052.33 1200.25,-1047.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1845.36,-744.6 1845.36,-767.4 1992.22,-767.4 1992.22,-744.6 1845.36,-744.6"/>
<text xml:space="preserve" text-anchor="start" x="1848.36" y="-750.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases, slot grid</text>
</g>
<!-- mmeetings&#45;&gt;mvenue -->
<g id="edge11" class="edge">
<title>mmeetings&#45;&gt;mvenue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1736.12,-523.07C1719.91,-549.91 1701.8,-579.33 1684.62,-606 1673.75,-622.87 1661.94,-640.62 1650.33,-657.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1648.4,-655.93 1646.36,-663.61 1652.74,-658.88 1648.4,-655.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1696.33,-583.2 1696.33,-606 1781.71,-606 1781.71,-583.2 1696.33,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="1699.33" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads places</text>
</g>
</g>
</svg>
`;case`web`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1835pt" height="1265pt"
 viewBox="0.00 0.00 1835.00 1265.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1250.25)">
<g id="clust1" class="cluster">
<title>cluster_web</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-964.4 868,-964.4 868,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-951.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WEB APP</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="893,-8 893,-289.2 1797,-289.2 1797,-8 893,-8"/>
<text xml:space="preserve" text-anchor="start" x="901" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- pwa -->
<g id="node1" class="node">
<title>pwa</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-903.2 47.98,-903.2 47.98,-723.2 368.02,-723.2 368.02,-903.2"/>
<text xml:space="preserve" text-anchor="start" x="149.1" y="-835" font-family="Arial" font-size="20.00" fill="#eff6ff">PWA runtime</text>
<text xml:space="preserve" text-anchor="start" x="165.02" y="-814" font-family="Arial" font-size="13.00" fill="#bfdbfe">Service worker</text>
<text xml:space="preserve" text-anchor="start" x="71.26" y="-792.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Precached shell, push notifications, kiosk</text>
<text xml:space="preserve" text-anchor="start" x="165.48" y="-774.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">keep&#45;awake.</text>
</g>
<!-- commands -->
<g id="node2" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="821.46,-903.2 484.54,-903.2 484.54,-723.2 821.46,-723.2 821.46,-903.2"/>
<text xml:space="preserve" text-anchor="start" x="601.87" y="-834.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="504.6" y="-811.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain policy,</text>
<text xml:space="preserve" text-anchor="start" x="517.94" y="-793.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">call the API, reconcile with the confirmed</text>
<text xml:space="preserve" text-anchor="start" x="626.31" y="-775.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">change.</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="827.53,-580.4 478.47,-580.4 478.47,-400.4 827.53,-400.4 827.53,-580.4"/>
<text xml:space="preserve" text-anchor="start" x="619.65" y="-511.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="507.51" y="-488.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Normalized copy of one event as the viewer</text>
<text xml:space="preserve" text-anchor="start" x="498.53" y="-470.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">may see it. Snapshot + change feed, persisted</text>
<text xml:space="preserve" text-anchor="start" x="605.89" y="-452.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">in IndexedDB.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="823.17,-228 482.83,-228 482.83,-48 823.17,-48 823.17,-228"/>
<text xml:space="preserve" text-anchor="start" x="590.75" y="-159" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="502.89" y="-136" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, agenda, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="507.51" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, settings, admin. Pure functions of</text>
<text xml:space="preserve" text-anchor="start" x="576.92" y="-100" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica + local UI state.</text>
</g>
<!-- http -->
<g id="node6" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1756.98,-228 1405.02,-228 1405.02,-48 1756.98,-48 1756.98,-228"/>
<text xml:space="preserve" text-anchor="start" x="1536" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1543.78" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1425.07" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1455.94" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Auth, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1505.97" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node7" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1294.57,-228 933.43,-228 933.43,-48 1294.57,-48 1294.57,-228"/>
<text xml:space="preserve" text-anchor="start" x="1056.73" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1100.99" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="979.78" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="953.49" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="1056.05" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M653,-723.27C653,-682.07 653,-632.96 653,-590.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="655.63,-590.76 653,-583.26 650.38,-590.76 655.63,-590.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653,-640.4 653,-663.2 809.96,-663.2 809.96,-640.4 653,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="656" y="-646.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">predicts, then reconciles</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M775.27,-723.5C950.17,-596.62 1270.43,-364.3 1450.01,-234.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1451.48,-236.2 1456,-229.68 1448.39,-231.95 1451.48,-236.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1209.25,-468.8 1209.25,-512 1360.77,-512 1360.77,-468.8 1209.25,-468.8"/>
<text xml:space="preserve" text-anchor="start" x="1212.25" y="-495" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1212.25" y="-474.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- shell&#45;&gt;features -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.87,-400.53C385.45,-349.67 466.46,-285.89 532.3,-234.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="533.61,-236.35 537.87,-229.65 530.36,-232.23 533.61,-236.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.84,-307.4 443.84,-330.2 504.32,-330.2 504.32,-307.4 443.84,-307.4"/>
<text xml:space="preserve" text-anchor="start" x="446.84" y="-313.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes to</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M653,-400.53C653,-351.02 653,-289.25 653,-238.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="655.63,-238.31 653,-230.81 650.38,-238.31 655.63,-238.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653,-307.4 653,-330.2 738.36,-330.2 738.36,-307.4 653,-307.4"/>
<text xml:space="preserve" text-anchor="start" x="656" y="-313.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">renders from</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M769.93,-400.53C836.83,-349.67 920.75,-285.89 988.96,-234.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="990.41,-236.24 994.79,-229.61 987.23,-232.06 990.41,-236.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="897.32,-297.2 897.32,-340.4 1115.02,-340.4 1115.02,-297.2 897.32,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="900.32" y="-323.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="900.32" y="-302.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
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
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4573pt" height="466pt"
 viewBox="0.00 0.00 4573.00 466.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 451.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-341 0,-341 0,-161 361.12,-161 361.12,-341"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="42.97" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, keeps a personal agenda, arranges</text>
<text xml:space="preserve" text-anchor="start" x="153.05" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1s.</text>
</g>
<!-- features -->
<g id="node2" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1011.42,-341 671.09,-341 671.09,-161 1011.42,-161 1011.42,-341"/>
<text xml:space="preserve" text-anchor="start" x="779.01" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="691.15" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, agenda, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="695.76" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, settings, admin. Pure functions of</text>
<text xml:space="preserve" text-anchor="start" x="765.18" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica + local UI state.</text>
</g>
<!-- commands -->
<g id="node3" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1602.25,-341 1265.34,-341 1265.34,-161 1602.25,-161 1602.25,-341"/>
<text xml:space="preserve" text-anchor="start" x="1382.67" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="1285.39" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain policy,</text>
<text xml:space="preserve" text-anchor="start" x="1298.73" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">call the API, reconcile with the confirmed</text>
<text xml:space="preserve" text-anchor="start" x="1407.1" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">change.</text>
</g>
<!-- replica -->
<g id="node4" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2761.17,-180 2412.11,-180 2412.11,0 2761.17,0 2761.17,-180"/>
<text xml:space="preserve" text-anchor="start" x="2553.29" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="2441.15" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Normalized copy of one event as the viewer</text>
<text xml:space="preserve" text-anchor="start" x="2432.17" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">may see it. Snapshot + change feed, persisted</text>
<text xml:space="preserve" text-anchor="start" x="2539.53" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">in IndexedDB.</text>
</g>
<!-- http -->
<g id="node5" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2352.11,-436 2000.15,-436 2000.15,-256 2352.11,-256 2352.11,-436"/>
<text xml:space="preserve" text-anchor="start" x="2131.13" y="-376.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="2138.91" y="-355.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="2020.21" y="-334.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="2051.07" y="-316.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Auth, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="2101.11" y="-298.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- mscheduling -->
<g id="node6" class="node">
<title>mscheduling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3141.21,-436 2821.17,-436 2821.17,-256 3141.21,-256 3141.21,-436"/>
<text xml:space="preserve" text-anchor="start" x="2933.38" y="-367" font-family="Arial" font-size="20.00" fill="#eff6ff">scheduling</text>
<text xml:space="preserve" text-anchor="start" x="2851.98" y="-344" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions (kinds: session, shift, fixture),</text>
<text xml:space="preserve" text-anchor="start" x="2841.96" y="-326" font-family="Arial" font-size="15.00" fill="#bfdbfe">RSVPs, booking rules, reserved windows,</text>
<text xml:space="preserve" text-anchor="start" x="2951.59" y="-308" font-family="Arial" font-size="15.00" fill="#bfdbfe">capacity.</text>
</g>
<!-- kernel -->
<g id="node7" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3888.6,-436 3555.85,-436 3555.85,-256 3888.6,-256 3888.6,-436"/>
<text xml:space="preserve" text-anchor="start" x="3693.32" y="-367" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="3585.92" y="-344" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, clock, ids, actor</text>
<text xml:space="preserve" text-anchor="start" x="3575.91" y="-326" font-family="Arial" font-size="15.00" fill="#bfdbfe">context, errors. The only code every module</text>
<text xml:space="preserve" text-anchor="start" x="3683.05" y="-308" font-family="Arial" font-size="15.00" fill="#bfdbfe">may import.</text>
</g>
<!-- feed -->
<g id="node8" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4543.39,-265 4182.25,-265 4182.25,-85 4543.39,-85 4543.39,-265"/>
<text xml:space="preserve" text-anchor="start" x="4305.55" y="-205.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="4349.82" y="-184.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="4228.6" y="-163.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="4202.31" y="-145.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="4304.87" y="-127.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;features -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M361.12,-251C454.29,-251 567.78,-251 660.92,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="660.78,-253.63 668.28,-251 660.78,-248.38 660.78,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.12,-254 424.12,-286.8 448.12,-286.8 448.12,-254 424.12,-254"/>
<text xml:space="preserve" text-anchor="start" x="432.22" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.12,-254 451.12,-286.8 608.09,-286.8 608.09,-254 451.12,-254"/>
<text xml:space="preserve" text-anchor="start" x="454.12" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps RSVP on a session</text>
</g>
<!-- features&#45;&gt;commands -->
<g id="edge2" class="edge">
<title>features&#45;&gt;commands</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1011.08,-251C1087.42,-251 1177.66,-251 1255.03,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1254.85,-253.63 1262.35,-251 1254.85,-248.38 1254.85,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1074.42,-254 1074.42,-286.8 1098.42,-286.8 1098.42,-254 1074.42,-254"/>
<text xml:space="preserve" text-anchor="start" x="1082.53" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1101.42,-254 1101.42,-286.8 1202.34,-286.8 1202.34,-254 1101.42,-254"/>
<text xml:space="preserve" text-anchor="start" x="1104.42" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp(sessionId)</text>
</g>
<!-- commands&#45;&gt;replica -->
<g id="edge3" class="edge">
<title>commands&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1588.83,-161.13C1612.76,-150.41 1637.7,-140.95 1662.25,-134.4 1911.96,-67.74 2212.9,-67.37 2401.81,-76.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2401.48,-78.89 2409.1,-76.63 2401.73,-73.65 2401.48,-78.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.8,-137.4 1673.8,-177 1697.8,-177 1697.8,-137.4 1673.8,-137.4"/>
<text xml:space="preserve" text-anchor="start" x="1681.91" y="-154" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1700.8,-137.4 1700.8,-177 1928.6,-177 1928.6,-137.4 1700.8,-137.4"/>
<text xml:space="preserve" text-anchor="start" x="1703.8" y="-160" font-family="Arial" font-size="14.00" fill="#c9c9c9">apply predicted change (policy says</text>
<text xml:space="preserve" text-anchor="start" x="1715.08" y="-143.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">allowed, capacity not exceeded)</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1601.97,-281.72C1622.25,-285.05 1642.7,-288.24 1662.25,-291 1770.58,-306.32 1892.33,-319.54 1990.01,-329.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1989.56,-331.77 1997.28,-329.9 1990.07,-326.55 1989.56,-331.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1665.25,-325.85 1665.25,-382.25 1689.25,-382.25 1689.25,-325.85 1665.25,-325.85"/>
<text xml:space="preserve" text-anchor="start" x="1673.36" y="-350.85" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1692.25,-325.85 1692.25,-382.25 1937.15,-382.25 1937.15,-325.85 1692.25,-325.85"/>
<text xml:space="preserve" text-anchor="start" x="1695.25" y="-365.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /events/{slug}/sessions/{id}/rsvp</text>
<text xml:space="preserve" text-anchor="start" x="1755.57" y="-348.45" font-family="Arial" font-size="14.00" fill="#c9c9c9">(Idempotency&#45;Key)</text>
<text xml:space="preserve" text-anchor="start" x="1767.25" y="-331.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS / JSON</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge9" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1612.34,-217.38C1710.29,-204.92 1833.36,-199.36 1940.15,-225.2 1968.91,-232.16 1998.09,-243.28 2025.66,-256.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1612.13,-214.76 1605.03,-218.33 1612.81,-219.96 1612.13,-214.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1692.47,-228.2 1692.47,-261 1716.47,-261 1716.47,-228.2 1692.47,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1700.58" y="-241.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1719.47,-228.2 1719.47,-261 1909.93,-261 1909.93,-228.2 1719.47,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1722.47" y="-239" font-family="Arial" font-size="14.00" fill="#c9c9c9">201 with the recorded change</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge8" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2771.49,-98.81C3113.6,-115.2 3843.85,-150.18 4182.5,-166.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2771.63,-96.19 2764.01,-98.45 2771.38,-101.43 2771.63,-96.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3220.36,-135.5 3220.36,-191.9 3244.36,-191.9 3244.36,-135.5 3220.36,-135.5"/>
<text xml:space="preserve" text-anchor="start" x="3228.47" y="-160.5" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3247.36,-135.5 3247.36,-191.9 3476.7,-191.9 3476.7,-135.5 3247.36,-135.5"/>
<text xml:space="preserve" text-anchor="start" x="3250.36" y="-174.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">change seq N to every viewer of the</text>
<text xml:space="preserve" text-anchor="start" x="3262.81" y="-158.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">event (this one matches it to the</text>
<text xml:space="preserve" text-anchor="start" x="3272.55" y="-141.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">prediction by command_key)</text>
</g>
<!-- http&#45;&gt;mscheduling -->
<g id="edge5" class="edge">
<title>http&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2351.88,-346C2488.13,-346 2676.23,-346 2811.04,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2810.94,-348.63 2818.44,-346 2810.94,-343.38 2810.94,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2451.08,-349 2451.08,-388.6 2475.08,-388.6 2475.08,-349 2451.08,-349"/>
<text xml:space="preserve" text-anchor="start" x="2459.18" y="-365.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2478.08,-349 2478.08,-388.6 2722.21,-388.6 2722.21,-349 2478.08,-349"/>
<text xml:space="preserve" text-anchor="start" x="2481.08" y="-371.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp use case: authorize, check phase</text>
<text xml:space="preserve" text-anchor="start" x="2493.53" y="-354.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">and capacity, write, record change</text>
</g>
<!-- mscheduling&#45;&gt;kernel -->
<g id="edge6" class="edge">
<title>mscheduling&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3141.19,-346C3260.23,-346 3423.02,-346 3545.84,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3545.58,-348.63 3553.08,-346 3545.58,-343.38 3545.58,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3204.21,-349 3204.21,-381.8 3228.21,-381.8 3228.21,-349 3204.21,-349"/>
<text xml:space="preserve" text-anchor="start" x="3212.32" y="-362.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3231.21,-349 3231.21,-381.8 3492.85,-381.8 3492.85,-349 3231.21,-349"/>
<text xml:space="preserve" text-anchor="start" x="3234.21" y="-359.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">commit state + change in one transaction</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3888.51,-301.74C3975.34,-278.49 4082.14,-249.89 4172.31,-225.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4172.88,-228.31 4179.45,-223.83 4171.53,-223.24 4172.88,-228.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3951.6,-283.84 3951.6,-316.64 3975.6,-316.64 3975.6,-283.84 3951.6,-283.84"/>
<text xml:space="preserve" text-anchor="start" x="3959.71" y="-297.04" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3978.6,-283.84 3978.6,-316.64 4119.25,-316.64 4119.25,-283.84 3978.6,-283.84"/>
<text xml:space="preserve" text-anchor="start" x="3981.6" y="-294.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish change seq N</text>
</g>
</g>
</svg>
`;case`flowSessionMoved`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3755pt" height="822pt"
 viewBox="0.00 0.00 3755.00 822.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 807.05)">
<!-- organizer -->
<g id="node1" class="node">
<title>organizer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="333.59,-743 0,-743 0,-563 333.59,-563 333.59,-743"/>
<text xml:space="preserve" text-anchor="start" x="122.89" y="-674" font-family="Arial" font-size="20.00" fill="#eff6ff">Organizer</text>
<text xml:space="preserve" text-anchor="start" x="23.38" y="-651" font-family="Arial" font-size="15.00" fill="#bfdbfe">Configures an event: days, places, phases,</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-633" font-family="Arial" font-size="15.00" fill="#bfdbfe">booking rules, fixtures. Moderates. A role on</text>
<text xml:space="preserve" text-anchor="start" x="65.48" y="-615" font-family="Arial" font-size="15.00" fill="#bfdbfe">a person, not a separate login.</text>
</g>
<!-- http -->
<g id="node2" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.18,-743 655.22,-743 655.22,-563 1007.18,-563 1007.18,-743"/>
<text xml:space="preserve" text-anchor="start" x="786.2" y="-683.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="793.98" y="-662.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="675.28" y="-641.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="706.14" y="-623.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Auth, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="756.18" y="-605.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- mscheduling -->
<g id="node3" class="node">
<title>mscheduling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1733.68,-743 1413.64,-743 1413.64,-563 1733.68,-563 1733.68,-743"/>
<text xml:space="preserve" text-anchor="start" x="1525.85" y="-674" font-family="Arial" font-size="20.00" fill="#eff6ff">scheduling</text>
<text xml:space="preserve" text-anchor="start" x="1444.45" y="-651" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions (kinds: session, shift, fixture),</text>
<text xml:space="preserve" text-anchor="start" x="1434.43" y="-633" font-family="Arial" font-size="15.00" fill="#bfdbfe">RSVPs, booking rules, reserved windows,</text>
<text xml:space="preserve" text-anchor="start" x="1544.07" y="-615" font-family="Arial" font-size="15.00" fill="#bfdbfe">capacity.</text>
</g>
<!-- kernel -->
<g id="node4" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2362.91,-743 2030.16,-743 2030.16,-563 2362.91,-563 2362.91,-743"/>
<text xml:space="preserve" text-anchor="start" x="2167.63" y="-674" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="2060.22" y="-651" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, clock, ids, actor</text>
<text xml:space="preserve" text-anchor="start" x="2050.21" y="-633" font-family="Arial" font-size="15.00" fill="#bfdbfe">context, errors. The only code every module</text>
<text xml:space="preserve" text-anchor="start" x="2157.36" y="-615" font-family="Arial" font-size="15.00" fill="#bfdbfe">may import.</text>
</g>
<!-- feed -->
<g id="node5" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3132.6,-792 2771.46,-792 2771.46,-612 3132.6,-612 3132.6,-792"/>
<text xml:space="preserve" text-anchor="start" x="2894.76" y="-732.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2939.03" y="-711.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2817.81" y="-690.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2791.52" y="-672.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2894.08" y="-654.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node6" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2364.98,-405 2028.08,-405 2028.08,-225 2364.98,-225 2364.98,-405"/>
<text xml:space="preserve" text-anchor="start" x="2175.41" y="-336" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="2049.36" y="-313" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single scheduler loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="2048.14" y="-295" font-family="Arial" font-size="15.00" fill="#bfdbfe">scheduled work (reminders, lapses), delivery</text>
<text xml:space="preserve" text-anchor="start" x="2095.64" y="-277" font-family="Arial" font-size="15.00" fill="#bfdbfe">attempts. Leased, idempotent.</text>
</g>
<!-- mnotifications -->
<g id="node7" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3121.75,-470 2782.32,-470 2782.32,-290 3121.75,-290 3121.75,-470"/>
<text xml:space="preserve" text-anchor="start" x="2899.22" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="2802.37" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notification records, per&#45;channel preferences</text>
<text xml:space="preserve" text-anchor="start" x="2804.44" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">and bindings, delivery log. Channels: in&#45;app,</text>
<text xml:space="preserve" text-anchor="start" x="2893.25" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">email, push, chat.</text>
</g>
<!-- smtp -->
<g id="node8" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3711.82,-760 3391.78,-760 3391.78,-580 3711.82,-580 3711.82,-760"/>
<text xml:space="preserve" text-anchor="start" x="3487.89" y="-673" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="3495.54" y="-650" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node9" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3711.82,-470 3391.78,-470 3391.78,-290 3711.82,-290 3711.82,-470"/>
<text xml:space="preserve" text-anchor="start" x="3451.21" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="3412.14" y="-369" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="3523.04" y="-351" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- chatplatform -->
<g id="node10" class="node">
<title>chatplatform</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3724.85,-180 3378.76,-180 3378.76,0 3724.85,0 3724.85,-180"/>
<text xml:space="preserve" text-anchor="start" x="3491.78" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat platform</text>
<text xml:space="preserve" text-anchor="start" x="3398.82" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Telegram, Matrix or Signal — reached through</text>
<text xml:space="preserve" text-anchor="start" x="3489.67" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">a channel adapter.</text>
</g>
<!-- organizer&#45;&gt;http -->
<g id="edge1" class="edge">
<title>organizer&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M333.24,-653C427.99,-653 547.12,-653 644.99,-653"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="644.77,-655.63 652.27,-653 644.77,-650.38 644.77,-655.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="396.59,-656 396.59,-688.8 420.59,-688.8 420.59,-656 396.59,-656"/>
<text xml:space="preserve" text-anchor="start" x="404.7" y="-669.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.59,-656 423.59,-688.8 592.22,-688.8 592.22,-656 423.59,-656"/>
<text xml:space="preserve" text-anchor="start" x="426.59" y="-666.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /sessions/{id}/move</text>
</g>
<!-- http&#45;&gt;mscheduling -->
<g id="edge2" class="edge">
<title>http&#45;&gt;mscheduling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1006.74,-653C1126.6,-653 1284.86,-653 1403.54,-653"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1403.29,-655.63 1410.79,-653 1403.29,-650.38 1403.29,-655.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1070.18,-656 1070.18,-695.6 1094.18,-695.6 1094.18,-656 1070.18,-656"/>
<text xml:space="preserve" text-anchor="start" x="1078.29" y="-672.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1097.18,-656 1097.18,-695.6 1350.64,-695.6 1350.64,-656 1097.18,-656"/>
<text xml:space="preserve" text-anchor="start" x="1100.18" y="-678.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">move use case: booking rules, reserved</text>
<text xml:space="preserve" text-anchor="start" x="1156.61" y="-661.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">windows, clash check</text>
</g>
<!-- mscheduling&#45;&gt;kernel -->
<g id="edge3" class="edge">
<title>mscheduling&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1733.34,-653C1820.87,-653 1929.74,-653 2019.83,-653"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2019.63,-655.63 2027.13,-653 2019.63,-650.38 2019.63,-655.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1796.68,-656 1796.68,-688.8 1820.68,-688.8 1820.68,-656 1796.68,-656"/>
<text xml:space="preserve" text-anchor="start" x="1804.79" y="-669.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1823.68,-656 1823.68,-688.8 1965.08,-688.8 1965.08,-656 1823.68,-656"/>
<text xml:space="preserve" text-anchor="start" x="1826.68" y="-666.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">record SessionMoved</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2362.89,-663.75C2480.45,-671.4 2638.62,-681.68 2761.32,-689.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2760.9,-692.27 2768.56,-690.13 2761.24,-687.03 2760.9,-692.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2472.33,-689.15 2472.33,-721.95 2496.33,-721.95 2496.33,-689.15 2472.33,-689.15"/>
<text xml:space="preserve" text-anchor="start" x="2480.44" y="-702.35" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2499.33,-689.15 2499.33,-721.95 2664.11,-721.95 2664.11,-689.15 2499.33,-689.15"/>
<text xml:space="preserve" text-anchor="start" x="2502.33" y="-699.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish to event audience</text>
</g>
<!-- kernel&#45;&gt;mnotifications -->
<g id="edge6" class="edge">
<title>kernel&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2288.79,-555.41C2314.69,-525.75 2342.05,-492.41 2364.98,-460 2396.15,-415.93 2378.33,-381.55 2424.98,-354.4 2532.16,-292.02 2673.42,-302.93 2782.57,-326.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2286.86,-553.63 2283.89,-560.99 2290.81,-557.09 2286.86,-553.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2435.77,-357.4 2435.77,-397 2459.77,-397 2459.77,-357.4 2435.77,-357.4"/>
<text xml:space="preserve" text-anchor="start" x="2443.88" y="-374" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2462.77,-357.4 2462.77,-397 2700.67,-397 2700.67,-357.4 2462.77,-357.4"/>
<text xml:space="preserve" text-anchor="start" x="2465.77" y="-380" font-family="Arial" font-size="14.00" fill="#c9c9c9">record NotificationCreated (audience:</text>
<text xml:space="preserve" text-anchor="start" x="2527.24" y="-363.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">one person each)</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge5" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2357.86,-405C2379.85,-414.03 2402.58,-421.78 2424.98,-427 2538.74,-453.49 2669.53,-441.98 2772.25,-423.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2772.52,-426.35 2779.43,-422.42 2771.59,-421.18 2772.52,-426.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2429.74,-445.55 2429.74,-485.15 2453.74,-485.15 2453.74,-445.55 2429.74,-445.55"/>
<text xml:space="preserve" text-anchor="start" x="2437.85" y="-462.15" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2456.74,-445.55 2456.74,-485.15 2706.7,-485.15 2706.7,-445.55 2456.74,-445.55"/>
<text xml:space="preserve" text-anchor="start" x="2459.74" y="-468.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">reaction: SessionMoved &#45;&gt; notifications</text>
<text xml:space="preserve" text-anchor="start" x="2482.32" y="-451.35" font-family="Arial" font-size="14.00" fill="#c9c9c9">for hosts and RSVP&#39;d attendees</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge7" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2347.15,-225.12C2372.36,-213.68 2398.85,-203.76 2424.98,-197.4 2548.7,-167.31 2590.83,-156.67 2711.46,-197.4 2763.84,-215.08 2813.8,-249.3 2854.42,-283.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2852.7,-285.35 2860.11,-288.22 2856.1,-281.36 2852.7,-285.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2427.98,-200.4 2427.98,-240 2451.98,-240 2451.98,-200.4 2427.98,-200.4"/>
<text xml:space="preserve" text-anchor="start" x="2436.09" y="-217" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2454.98,-200.4 2454.98,-240 2708.46,-240 2708.46,-200.4 2454.98,-200.4"/>
<text xml:space="preserve" text-anchor="start" x="2457.98" y="-223" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivery per bound channel with attempt</text>
<text xml:space="preserve" text-anchor="start" x="2572.38" y="-206.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">log</text>
</g>
<!-- mnotifications&#45;&gt;smtp -->
<g id="edge8" class="edge">
<title>mnotifications&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3121.53,-461.75C3203.16,-501.34 3300.91,-548.77 3382.51,-588.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3381.25,-590.66 3389.15,-591.57 3383.54,-585.94 3381.25,-590.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3222.45,-553.97 3222.45,-586.77 3246.45,-586.77 3246.45,-553.97 3222.45,-553.97"/>
<text xml:space="preserve" text-anchor="start" x="3230.56" y="-567.17" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3249.45,-553.97 3249.45,-586.77 3288.91,-586.77 3288.91,-553.97 3249.45,-553.97"/>
<text xml:space="preserve" text-anchor="start" x="3252.45" y="-564.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">email</text>
</g>
<!-- mnotifications&#45;&gt;pushservice -->
<g id="edge9" class="edge">
<title>mnotifications&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3121.53,-380C3202.82,-380 3300.12,-380 3381.52,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3381.34,-382.63 3388.84,-380 3381.34,-377.38 3381.34,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3224,-383 3224,-415.8 3248,-415.8 3248,-383 3224,-383"/>
<text xml:space="preserve" text-anchor="start" x="3232.11" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3251,-383 3251,-415.8 3287.36,-415.8 3287.36,-383 3251,-383"/>
<text xml:space="preserve" text-anchor="start" x="3254" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">push</text>
</g>
<!-- mnotifications&#45;&gt;chatplatform -->
<g id="edge10" class="edge">
<title>mnotifications&#45;&gt;chatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3121.53,-298.25C3199,-260.67 3291,-216.04 3369.92,-177.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3370.66,-180.31 3376.27,-174.67 3368.37,-175.59 3370.66,-180.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3195.6,-263.97 3195.6,-296.77 3219.6,-296.77 3219.6,-263.97 3195.6,-263.97"/>
<text xml:space="preserve" text-anchor="start" x="3203.71" y="-277.17" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3222.6,-263.97 3222.6,-296.77 3315.76,-296.77 3315.76,-263.97 3222.6,-263.97"/>
<text xml:space="preserve" text-anchor="start" x="3225.6" y="-274.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">chat message</text>
</g>
</g>
</svg>
`;case`flowJoin`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2624pt" height="512pt"
 viewBox="0.00 0.00 2624.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="361.12,-334 0,-334 0,-154 361.12,-154 361.12,-334"/>
<text xml:space="preserve" text-anchor="start" x="140.52" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs, books</text>
<text xml:space="preserve" text-anchor="start" x="42.97" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">slots, keeps a personal agenda, arranges</text>
<text xml:space="preserve" text-anchor="start" x="153.05" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1s.</text>
</g>
<!-- shell -->
<g id="node2" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.83,-334 745.79,-334 745.79,-154 1065.83,-154 1065.83,-334"/>
<text xml:space="preserve" text-anchor="start" x="845.22" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="767.39" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="826.18" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- http -->
<g id="node3" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1822.68,-482 1470.72,-482 1470.72,-302 1822.68,-302 1822.68,-482"/>
<text xml:space="preserve" text-anchor="start" x="1601.7" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1609.48" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1490.78" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from the</text>
<text xml:space="preserve" text-anchor="start" x="1521.64" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">contracts package. Auth, rate limiting,</text>
<text xml:space="preserve" text-anchor="start" x="1571.68" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">problem&#45;details errors.</text>
</g>
<!-- midentity -->
<g id="node4" class="node">
<title>midentity</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2586.23,-482 2240.99,-482 2240.99,-302 2586.23,-302 2586.23,-482"/>
<text xml:space="preserve" text-anchor="start" x="2381.93" y="-404" font-family="Arial" font-size="20.00" fill="#eff6ff">identity</text>
<text xml:space="preserve" text-anchor="start" x="2261.05" y="-381" font-family="Arial" font-size="15.00" fill="#bfdbfe">Join links, email codes, passkeys, passwords,</text>
<text xml:space="preserve" text-anchor="start" x="2303.56" y="-363" font-family="Arial" font-size="15.00" fill="#bfdbfe">login sessions, API tokens, roles.</text>
</g>
<!-- replica -->
<g id="node5" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1821.23,-180 1472.18,-180 1472.18,0 1821.23,0 1821.23,-180"/>
<text xml:space="preserve" text-anchor="start" x="1613.35" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1501.21" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Normalized copy of one event as the viewer</text>
<text xml:space="preserve" text-anchor="start" x="1492.23" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">may see it. Snapshot + change feed, persisted</text>
<text xml:space="preserve" text-anchor="start" x="1599.59" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">in IndexedDB.</text>
</g>
<!-- feed -->
<g id="node6" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2594.18,-180 2233.04,-180 2233.04,0 2594.18,0 2594.18,-180"/>
<text xml:space="preserve" text-anchor="start" x="2356.34" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2400.6" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2279.39" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2253.1" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2355.66" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;shell -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.8,-244C475.3,-244 622.85,-244 735.39,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="735.29,-246.63 742.79,-244 735.29,-241.38 735.29,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.12,-247 424.12,-279.8 448.12,-279.8 448.12,-247 424.12,-247"/>
<text xml:space="preserve" text-anchor="start" x="432.22" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.12,-247 451.12,-279.8 682.79,-279.8 682.79,-247 451.12,-247"/>
<text xml:space="preserve" text-anchor="start" x="454.12" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens /join/{token} from email or QR</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge2" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.53,-278.44C1085.81,-282.73 1106.3,-287.01 1125.83,-291 1236.76,-313.68 1361.26,-337.91 1460.61,-356.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1459.93,-359.49 1467.79,-358.32 1460.91,-354.33 1459.93,-359.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1178.62,-349.92 1178.62,-382.72 1202.62,-382.72 1202.62,-349.92 1178.62,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1186.72" y="-363.12" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1205.62,-349.92 1205.62,-382.72 1357.93,-382.72 1357.93,-349.92 1205.62,-349.92"/>
<text xml:space="preserve" text-anchor="start" x="1208.62" y="-360.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /auth/join {token}</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge4" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1075.85,-205.36C1175.66,-189.86 1303.13,-182.97 1410.72,-218.4 1462.75,-235.53 1512.7,-269.11 1553.07,-302.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1075.65,-202.74 1068.65,-206.51 1076.47,-207.92 1075.65,-202.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1128.83,-221.4 1128.83,-261 1152.83,-261 1152.83,-221.4 1128.83,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1136.93" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1155.83,-221.4 1155.83,-261 1407.72,-261 1407.72,-221.4 1155.83,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1158.83" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">Set&#45;Cookie (httpOnly, SameSite=Lax) +</text>
<text xml:space="preserve" text-anchor="start" x="1241.7" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">actor context</text>
</g>
<!-- shell&#45;&gt;replica -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1055.91,-154.04C1078.69,-143.4 1102.43,-133.94 1125.83,-127.2 1234.47,-95.88 1360.92,-86.27 1461.9,-84.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1461.73,-87.27 1469.19,-84.54 1461.66,-82.02 1461.73,-87.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1219.47,-130.2 1219.47,-163 1243.47,-163 1243.47,-130.2 1219.47,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1227.58" y="-143.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1246.47,-130.2 1246.47,-163 1317.08,-163 1317.08,-130.2 1246.47,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1249.47" y="-141" font-family="Arial" font-size="14.00" fill="#c9c9c9">load event</text>
</g>
<!-- http&#45;&gt;midentity -->
<g id="edge3" class="edge">
<title>http&#45;&gt;midentity</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1822.23,-392C1944.35,-392 2107.11,-392 2230.8,-392"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2230.61,-394.63 2238.11,-392 2230.61,-389.38 2230.61,-394.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1897.74,-395 1897.74,-434.6 1921.74,-434.6 1921.74,-395 1897.74,-395"/>
<text xml:space="preserve" text-anchor="start" x="1905.85" y="-411.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1924.74,-395 1924.74,-434.6 2157.99,-434.6 2157.99,-395 1924.74,-395"/>
<text xml:space="preserve" text-anchor="start" x="1927.74" y="-417.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">validate token, create a verified login</text>
<text xml:space="preserve" text-anchor="start" x="2017.63" y="-400.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">session</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1820.79,-90C1940.5,-90 2099.75,-90 2222.9,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2222.67,-92.63 2230.17,-90 2222.67,-87.38 2222.67,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1885.68,-93 1885.68,-132.6 1909.68,-132.6 1909.68,-93 1885.68,-93"/>
<text xml:space="preserve" text-anchor="start" x="1893.79" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1912.68,-93 1912.68,-132.6 2170.04,-132.6 2170.04,-93 1912.68,-93"/>
<text xml:space="preserve" text-anchor="start" x="1915.68" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET snapshot, then subscribe since seq</text>
<text xml:space="preserve" text-anchor="start" x="1980.67" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
</g>
</svg>
`;case`flowReconnect`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2569pt" height="512pt"
 viewBox="0.00 0.00 2569.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- pwa -->
<g id="node1" class="node">
<title>pwa</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-334 0,-334 0,-154 320.04,-154 320.04,-334"/>
<text xml:space="preserve" text-anchor="start" x="101.12" y="-265.8" font-family="Arial" font-size="20.00" fill="#eff6ff">PWA runtime</text>
<text xml:space="preserve" text-anchor="start" x="117.04" y="-244.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Service worker</text>
<text xml:space="preserve" text-anchor="start" x="23.28" y="-223.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Precached shell, push notifications, kiosk</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1795.87,-334 1446.82,-334 1446.82,-154 1795.87,-154 1795.87,-334"/>
<text xml:space="preserve" text-anchor="start" x="1587.99" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1475.85" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">Normalized copy of one event as the viewer</text>
<text xml:space="preserve" text-anchor="start" x="1466.87" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">may see it. Snapshot + change feed, persisted</text>
<text xml:space="preserve" text-anchor="start" x="1574.23" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">in IndexedDB.</text>
</g>
<!-- feed -->
<g id="node4" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2539.4,-482 2178.26,-482 2178.26,-302 2539.4,-302 2539.4,-482"/>
<text xml:space="preserve" text-anchor="start" x="2301.56" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2345.83" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2224.61" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2198.32" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence number. Also</text>
<text xml:space="preserve" text-anchor="start" x="2300.88" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds snapshots.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2529,-180 2188.67,-180 2188.67,0 2529,0 2529,-180"/>
<text xml:space="preserve" text-anchor="start" x="2296.59" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="2208.72" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, agenda, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="2213.34" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, settings, admin. Pure functions of</text>
<text xml:space="preserve" text-anchor="start" x="2282.76" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica + local UI state.</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1043.82,-244C1159.17,-244 1315.63,-244 1436.46,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1436.4,-246.63 1443.9,-244 1436.4,-241.38 1436.4,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1107.24,-247 1107.24,-286.6 1131.24,-286.6 1131.24,-247 1107.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1115.34" y="-263.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1134.24,-247 1134.24,-286.6 1383.82,-286.6 1383.82,-247 1134.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1137.24" y="-269.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">load persisted replica (seq 4120), show</text>
<text xml:space="preserve" text-anchor="start" x="1199.58" y="-252.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">&quot;last synced 14:02&quot;</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1795.78,-278.91C1816.04,-282.98 1836.41,-287.08 1855.87,-291 1959.08,-311.77 2074.23,-334.94 2168.18,-353.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2167.53,-356.39 2175.4,-355.29 2168.56,-351.24 2167.53,-356.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1900.71,-346.34 1900.71,-385.94 1924.71,-385.94 1924.71,-346.34 1900.71,-346.34"/>
<text xml:space="preserve" text-anchor="start" x="1908.82" y="-362.94" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1927.71,-346.34 1927.71,-385.94 2073.42,-385.94 2073.42,-346.34 1927.71,-346.34"/>
<text xml:space="preserve" text-anchor="start" x="1930.71" y="-368.94" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET feed?since=4120</text>
<text xml:space="preserve" text-anchor="start" x="1939.87" y="-352.14" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1805.93,-203.57C1901.25,-190.24 2018.37,-186.01 2118.26,-218.4 2171.03,-235.51 2221.91,-269.08 2263.11,-302.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1805.64,-200.96 1798.59,-204.63 1806.39,-206.16 1805.64,-200.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1858.87,-221.4 1858.87,-261 1882.87,-261 1882.87,-221.4 1858.87,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1866.98" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1885.87,-221.4 1885.87,-261 2115.26,-261 2115.26,-221.4 1885.87,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1888.87" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">changes 4121..4187, or 410 Gone if</text>
<text xml:space="preserve" text-anchor="start" x="1929.74" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">pruned → full snapshot</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge5" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1783.78,-154.13C1807.4,-143.9 1831.87,-134.79 1855.87,-128.2 1960.36,-99.49 2081.37,-89.63 2178.4,-87.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2178.45,-89.72 2185.88,-86.92 2178.32,-84.47 2178.45,-89.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1879.9,-131.2 1879.9,-164 1903.9,-164 1903.9,-131.2 1879.9,-131.2"/>
<text xml:space="preserve" text-anchor="start" x="1888.01" y="-144.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1906.9,-131.2 1906.9,-164 2094.23,-164 2094.23,-131.2 1906.9,-131.2"/>
<text xml:space="preserve" text-anchor="start" x="1909.9" y="-142" font-family="Arial" font-size="14.00" fill="#c9c9c9">re&#45;render, banner disappears</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};