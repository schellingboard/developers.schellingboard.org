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
    attendee [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs,<BR/>books slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SchellingBoard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unconference scheduling: propose → vote<BR/>→ schedule.</FONT></TD></TR></TABLE>>,
        likec4_id=sb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> sb [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="156" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id="1t5r585",
        minlen=1,
        style=dashed];
    siteadmin [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, guests,<BR/>events.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> sb [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="160" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1ssui73",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> sb [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="96" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id="1ol1yyg",
        style=dashed];
    sb -> pushservice [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="116" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="14z77iw",
        style=dashed];
    smtp [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sb -> smtp [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="88" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
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
        web [fixedsize=true,
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Vite, TypeScript, PWA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Static single-page app. Holds a per-event<BR/>replica and renders every view from it.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        server [fixedsize=true,
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node, Hono, TypeScript</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One Node process: HTTP API, change<BR/>feed, background jobs. Serves the web<BR/>app as static files.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        db [color="#0369a1",
            fillcolor="#0284c7",
            fixedsize=true,
            fontcolor="#f0f9ff",
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SQLite database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">SQLite, WAL mode</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">State tables plus the append-only change<BR/>log. One file to back up.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        files [color="#0369a1",
            fillcolor="#0284c7",
            fixedsize=true,
            fontcolor="#f0f9ff",
            group=sb,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars, location images and the venue<BR/>map, re-encoded on upload.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.files",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    attendee [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs,<BR/>books slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>,
        likec4_id=attendee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    attendee -> web [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="156" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses, installs on phone</FONT></TD></TR></TABLE>>,
        likec4_id=yn1evf,
        minlen=1,
        style=dashed];
    siteadmin [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site admin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs the installation: site settings, guests,<BR/>events.</FONT></TD></TR></TABLE>>,
        likec4_id=siteAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    siteadmin -> web [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="160" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">administers installation</FONT></TD></TR></TABLE>>,
        likec4_id="1f862jl",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> web [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="96" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id=nevd52,
        style=dashed];
    reverseproxy [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reverse proxy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Terminates TLS. Not part of the app;<BR/>documented for self-hosters.</FONT></TD></TR></TABLE>>,
        likec4_id=reverseProxy,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    reverseproxy -> server [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="114" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">forwards HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="3yshrw",
        minlen=1,
        style=dashed];
    web -> server [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="33" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[...]</FONT></TD></TR></TABLE>>,
        likec4_id=q3w3zz,
        style=dotted,
        weight=2];
    server -> pushservice [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="116" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="1kl7f4j",
        style=dashed];
    server -> db [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="117" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ SQL via ports ]</FONT></TD></TR></TABLE>>,
        likec4_id="6tid3d",
        minlen=1,
        style=dashed,
        weight=2];
    server -> files [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="105" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores uploads</FONT></TD></TR></TABLE>>,
        likec4_id=npqs4a,
        minlen=1,
        style=dashed,
        weight=2];
    smtp [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> smtp [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="88" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
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
            mvenue [fixedsize=true,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Locations (rooms, areas), their images,<BR/>colours and unavailable times.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mVenue",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mcomments [fixedsize=true,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">comments</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Comments on proposals, sessions and<BR/>profiles, and their likes.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mComments",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            msettings [fixedsize=true,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">settings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site settings.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mSettings",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mupdates [fixedsize=true,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">updates</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The daily look-up of the latest release,<BR/>shown to the admin.</FONT></TD></TR></TABLE>>,
                likec4_id="sb.server.mUpdates",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        http [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from<BR/>the contracts package. Gates, rate<BR/>limiting, problem-details errors.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.http",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        feed [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.feed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        jobs [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single leased loop: reactions to changes,<BR/>deliveries (email, push), reminders,<BR/>pruning. Idempotent.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.jobs",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mvenue -> msettings [style=invis];
        mpeople [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mPeople",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mnotifications [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push<BR/>subscriptions. Email and push delivery run<BR/>in the jobs loop.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mNotifications",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mproposals [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, hosts and votes.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mProposals",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        msessions [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mSessions",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mmeetings [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>points.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mMeetings",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kernel [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.kernel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mevents [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Events, days, phases, time zone, per-event<BR/>settings including the identity mode.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.mEvents",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    web [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Vite, TypeScript, PWA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Static single-page app. Holds a per-event<BR/>replica and renders every view from it.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.web",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    web -> http [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="159" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">commands and queries</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijxsbt",
        style=dashed];
    web -> feed [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="224" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">snapshot, then changes since seq</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ Server-Sent Events ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ijzftf",
        style=dotted];
    http -> mpeople [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="179" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">signs in, resolves the actor</FONT></TD></TR></TABLE>>,
        likec4_id="1yqbc8s",
        minlen=1,
        style=dashed,
        weight=2];
    http -> mproposals [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="125" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id="8n8dy8",
        style=dashed,
        weight=2];
    http -> msessions [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="125" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">invokes use cases</FONT></TD></TR></TABLE>>,
        likec4_id=ob23le,
        style=dashed,
        weight=2];
    feed -> kernel [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="119" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads change log</FONT></TD></TR></TABLE>>,
        likec4_id=uurmur,
        style=dashed,
        weight=2];
    jobs -> mnotifications [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="193" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs reactions and deliveries</FONT></TD></TR></TABLE>>,
        likec4_id="1oa5mp9",
        style=dashed,
        weight=3];
    smtp [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>,
        likec4_id=smtp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobs -> smtp [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="88" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends email</FONT></TD></TR></TABLE>>,
        likec4_id="1dbextc",
        minlen=1,
        style=dashed];
    pushservice [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jobs -> pushservice [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="116" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends Web Push</FONT></TD></TR></TABLE>>,
        likec4_id="1y6wjqh",
        minlen=1,
        style=dashed];
    mcomments -> mupdates [style=invis];
    db [color="#0369a1",
        fillcolor="#0284c7",
        fixedsize=true,
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SQLite database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">SQLite, WAL mode</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">State tables plus the append-only change<BR/>log. One file to back up.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.db",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    files [color="#0369a1",
        fillcolor="#0284c7",
        fixedsize=true,
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Directory on disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Avatars, location images and the venue<BR/>map, re-encoded on upload.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.files",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        style=dashed];
    mnotifications -> msessions [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=boylcp,
        style=dashed];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
        style=dashed];
    msessions -> kernel [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="116" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">records changes</FONT></TD></TR></TABLE>>,
        likec4_id=h7ayup,
        style=dashed];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="155" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases and days</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        style=dashed];
    mevents -> db [arrowhead=normal,
        likec4_id="6tid3d",
        ltail=cluster_server,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE FIXEDSIZE="TRUE" WIDTH="117" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ SQL via ports ]</FONT></TD></TR></TABLE>>];
    mevents -> files [arrowhead=normal,
        likec4_id=npqs4a,
        ltail=cluster_server,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE FIXEDSIZE="TRUE" WIDTH="105" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores uploads</FONT></TD></TR></TABLE>>];
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
    mvenue [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">venue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Locations (rooms, areas), their images,<BR/>colours and unavailable times.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mVenue",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpeople [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mPeople",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mvenue -> mpeople [style=invis];
    mcomments [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">comments</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Comments on proposals, sessions and<BR/>profiles, and their likes.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mComments",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mpeople -> mcomments [style=invis];
    msettings [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">settings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site settings.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mSettings",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcomments -> msettings [style=invis];
    mnotifications [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push<BR/>subscriptions. Email and push delivery run<BR/>in the jobs loop.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mNotifications",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mproposals [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">proposals</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposals, hosts and votes.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mProposals",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mproposals [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=i8h223,
        minlen=1,
        style=dashed];
    msessions [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mSessions",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> msessions [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id=boylcp,
        minlen=1,
        style=dashed];
    mmeetings [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">meetings</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">1-on-1 requests, availability, meeting<BR/>points.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mMeetings",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mnotifications -> mmeetings [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="78" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reacts to</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ change log ]</FONT></TD></TR></TABLE>>,
        likec4_id="11ocxfi",
        style=dashed];
    mevents [fixedsize=true,
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Events, days, phases, time zone, per-event<BR/>settings including the identity mode.</FONT></TD></TR></TABLE>>,
        likec4_id="sb.server.mEvents",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mmeetings -> mevents [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="155" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads phases and days</FONT></TD></TR></TABLE>>,
        likec4_id=lltb6n,
        minlen=1,
        style=dashed];
    mupdates [fixedsize=true,
        height=2.5,
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
        pwa [fixedsize=true,
            group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PWA runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Service worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Cached shell, push notifications, kiosk<BR/>keep-awake.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.pwa",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        commands [fixedsize=true,
            group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Commands</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every mutation: predict with a domain<BR/>policy, call the API, reconcile with the<BR/>confirmed change.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.commands",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        shell [fixedsize=true,
            group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.shell",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        replica [fixedsize=true,
            group="sb.web",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see<BR/>it. Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.web.replica",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        features [fixedsize=true,
            group="sb.web",
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
        http [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from<BR/>the contracts package. Gates, rate<BR/>limiting, problem-details errors.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.http",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        feed [fixedsize=true,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>,
            likec4_id="sb.server.feed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    pushservice [color="#475569",
        fillcolor="#64748b",
        fixedsize=true,
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Browser push services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Web Push endpoints operated by browser<BR/>vendors.</FONT></TD></TR></TABLE>>,
        likec4_id=pushService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pushservice -> pwa [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="96" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delivers push</FONT></TD></TR></TABLE>>,
        likec4_id=n2l2em,
        minlen=1,
        style=dashed];
    pwa -> shell [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="148" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">installs, delivers push</FONT></TD></TR></TABLE>>,
        likec4_id="9m65ci",
        style=dashed,
        weight=3];
    commands -> replica [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="167" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">predicts, then reconciles</FONT></TD></TR></TABLE>>,
        likec4_id="1mgjcbi",
        style=dashed,
        weight=3];
    commands -> http [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="159" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">commands and queries</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ HTTPS / JSON ]</FONT></TD></TR></TABLE>>,
        likec4_id=kzuy4z,
        minlen=1,
        style=dashed];
    shell -> features [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="69" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">routes to</FONT></TD></TR></TABLE>>,
        likec4_id="1h2guib",
        style=dashed];
    replica -> features [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="94" HEIGHT="25" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">renders from</FONT></TD></TR></TABLE>>,
        likec4_id=s7ncrx,
        style=dashed,
        weight=3];
    replica -> feed [arrowhead=normal,
        label=<<TABLE FIXEDSIZE="TRUE" WIDTH="224" HEIGHT="38" BORDER="0" CELLPADDING="0" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">snapshot, then changes since seq</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="11">[ Server-Sent Events ]</FONT></TD></TR></TABLE>>,
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs,<BR/>books slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "features" [
    likec4_id = "sb.web.features";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, proposals, voting, people,<BR/>meetings, notifications, settings, admin.<BR/>Pure functions of replica + local UI state.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "commands" [
    likec4_id = "sb.web.commands";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Commands</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every mutation: predict with a domain<BR/>policy, call the API, reconcile with the<BR/>confirmed change.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see<BR/>it. Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from<BR/>the contracts package. Gates, rate<BR/>limiting, problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "msessions" [
    likec4_id = "sb.server.mSessions";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
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
    fixedsize = true;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from<BR/>the contracts package. Gates, rate<BR/>limiting, problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "msessions" [
    likec4_id = "sb.server.mSessions";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">sessions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sessions, RSVPs, room unavailability,<BR/>attendee counts.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "kernel" [
    likec4_id = "sb.server.kernel";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Kernel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Unit of work, change log, actor, Result. The<BR/>shared code every module may import.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "jobs" [
    likec4_id = "sb.server.jobs";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Jobs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single leased loop: reactions to changes,<BR/>deliveries (email, push), reminders,<BR/>pruning. Idempotent.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "mnotifications" [
    likec4_id = "sb.server.mNotifications";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">notifications</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">In-app notifications and push<BR/>subscriptions. Email and push delivery run<BR/>in the jobs loop.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "smtp" [
    likec4_id = "smtp";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Any SMTP relay.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
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
    fixedsize = true;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Attendee</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Proposes and votes on sessions, RSVPs,<BR/>books slots, arranges 1-on-1s.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "shell" [
    likec4_id = "sb.web.shell";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "http" [
    likec4_id = "sb.server.http";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">HTTP API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">OpenAPI 3.1</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Versioned REST endpoints generated from<BR/>the contracts package. Gates, rate<BR/>limiting, problem-details errors.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "mpeople" [
    likec4_id = "sb.server.mPeople";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">people</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Guests, profiles, sign-in, passwords, login<BR/>sessions, join links, the site-admin role.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see<BR/>it. Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
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
    fixedsize = true;
  ];
  "shell" [
    likec4_id = "sb.web.shell";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shell &amp; router</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Routes, layout, auth gate, theme. Nothing<BR/>here knows the domain.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "replica" [
    likec4_id = "sb.web.replica";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Replica</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copy of one event as the viewer may see<BR/>it. Snapshot + change feed, persisted in<BR/>IndexedDB.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "feed" [
    likec4_id = "sb.server.feed";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Change feed</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SSE</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Per-viewer stream of changes filtered by<BR/>audience, resumable by sequence<BR/>number. Also builds snapshots.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
  ];
  "features" [
    likec4_id = "sb.web.features";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature views</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Schedule, proposals, voting, people,<BR/>meetings, notifications, settings, admin.<BR/>Pure functions of replica + local UI state.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fixedsize = true;
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
<svg width="790pt" height="860pt"
 viewBox="0.00 0.00 790.00 860.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 845.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.04,-830 10,-830 10,-650 330.04,-650 330.04,-830"/>
<text xml:space="preserve" text-anchor="start" x="129.99" y="-752" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="31.61" y="-729" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs,</text>
<text xml:space="preserve" text-anchor="start" x="69.14" y="-711" font-family="Arial" font-size="15.00" fill="#bfdbfe">books slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- sb -->
<g id="node2" class="node">
<title>sb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="545.04,-505 225,-505 225,-325 545.04,-325 545.04,-505"/>
<text xml:space="preserve" text-anchor="start" x="317.75" y="-427" font-family="Arial" font-size="20.00" fill="#eff6ff">SchellingBoard</text>
<text xml:space="preserve" text-anchor="start" x="244.52" y="-404" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unconference scheduling: propose → vote</text>
<text xml:space="preserve" text-anchor="start" x="344.58" y="-386" font-family="Arial" font-size="15.00" fill="#bfdbfe">→ schedule.</text>
</g>
<!-- siteadmin -->
<g id="node3" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="760.04,-830 440,-830 440,-650 760.04,-650 760.04,-830"/>
<text xml:space="preserve" text-anchor="start" x="552.77" y="-752" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="460.36" y="-729" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="575.84" y="-711" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- pushservice -->
<g id="node4" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="59.43" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="20.35" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="131.25" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- smtp -->
<g id="node5" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="756.04,-180 436,-180 436,0 756.04,0 756.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="532.11" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="539.76" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- attendee&#45;&gt;sb -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M229.05,-650.31C257.32,-607.85 291.23,-556.9 320.21,-513.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="322.28,-514.99 324.25,-507.29 317.91,-512.08 322.28,-514.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="283.97,-565 283.97,-590 439.97,-590 439.97,-565 283.97,-565"/>
<text xml:space="preserve" text-anchor="start" x="283.97" y="-576" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- sb&#45;&gt;pushservice -->
<g id="edge4" class="edge">
<title>sb&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M225.17,-355.18C186.64,-333.03 150.23,-303.54 128.02,-265 114.96,-242.33 114.13,-215.48 118.85,-189.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="121.39,-190.4 120.37,-182.52 116.25,-189.31 121.39,-190.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="128.02,-240 128.02,-265 244.02,-265 244.02,-240 128.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="128.02" y="-251" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- sb&#45;&gt;smtp -->
<g id="edge5" class="edge">
<title>sb&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M442.96,-325.31C470.69,-282.85 503.98,-231.9 532.41,-188.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="534.47,-190.02 536.37,-182.3 530.08,-187.15 534.47,-190.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="496.85,-240 496.85,-265 584.85,-265 584.85,-240 496.85,-240"/>
<text xml:space="preserve" text-anchor="start" x="496.85" y="-251" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- siteadmin&#45;&gt;sb -->
<g id="edge2" class="edge">
<title>siteadmin&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M540.99,-650.31C512.72,-607.85 478.81,-556.9 449.83,-513.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="452.13,-512.08 445.79,-507.29 447.76,-514.99 452.13,-512.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="498.97,-565 498.97,-590 658.97,-590 658.97,-565 498.97,-565"/>
<text xml:space="preserve" text-anchor="start" x="498.97" y="-576" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- pushservice&#45;&gt;sb -->
<g id="edge3" class="edge">
<title>pushservice&#45;&gt;sb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M227.53,-179.79C242.09,-199.45 257.25,-220.3 271.02,-240 288.14,-264.49 306.11,-291.33 322.58,-316.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="320.38,-317.87 326.68,-322.7 324.77,-314.99 320.38,-317.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="287.08,-240 287.08,-265 383.08,-265 383.08,-240 287.08,-240"/>
<text xml:space="preserve" text-anchor="start" x="287.08" y="-251" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
</g>
</svg>
`;case`containers`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2109pt" height="1080pt"
 viewBox="0.00 0.00 2109.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<g id="clust1" class="cluster">
<title>cluster_sb</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="560.04,-250 560.04,-821 2071.16,-821 2071.16,-250 560.04,-250"/>
<text xml:space="preserve" text-anchor="start" x="568.04" y="-808.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHELLINGBOARD</text>
</g>
<!-- web -->
<g id="node1" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="920.08,-622 600.04,-622 600.04,-442 920.08,-442 920.08,-622"/>
<text xml:space="preserve" text-anchor="start" x="720.04" y="-553.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="675.17" y="-532.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="622.48" y="-511.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="633.34" y="-493.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1474.12,-622 1154.08,-622 1154.08,-442 1474.12,-442 1474.12,-622"/>
<text xml:space="preserve" text-anchor="start" x="1284.65" y="-562.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Server</text>
<text xml:space="preserve" text-anchor="start" x="1244.73" y="-541.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node, Hono, TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1184.87" y="-520.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One Node process: HTTP API, change</text>
<text xml:space="preserve" text-anchor="start" x="1184.44" y="-502.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">feed, background jobs. Serves the web</text>
<text xml:space="preserve" text-anchor="start" x="1254.49" y="-484.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">app as static files.</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2031.16,-453.64C2031.16,-462.67 1959.44,-470 1871.14,-470 1782.84,-470 1711.12,-462.67 1711.12,-453.64 1711.12,-453.64 1711.12,-306.36 1711.12,-306.36 1711.12,-297.33 1782.84,-290 1871.14,-290 1959.44,-290 2031.16,-297.33 2031.16,-306.36 2031.16,-306.36 2031.16,-453.64 2031.16,-453.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2031.16,-453.64C2031.16,-444.61 1959.44,-437.27 1871.14,-437.27 1782.84,-437.27 1711.12,-444.61 1711.12,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1796.64" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="1815.51" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="1733.12" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change</text>
<text xml:space="preserve" text-anchor="start" x="1792.34" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">log. One file to back up.</text>
</g>
<!-- files -->
<g id="node4" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2031.16,-743.64C2031.16,-752.67 1959.44,-760 1871.14,-760 1782.84,-760 1711.12,-752.67 1711.12,-743.64 1711.12,-743.64 1711.12,-596.36 1711.12,-596.36 1711.12,-587.33 1782.84,-580 1871.14,-580 1959.44,-580 2031.16,-587.33 2031.16,-596.36 2031.16,-596.36 2031.16,-743.64 2031.16,-743.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2031.16,-743.64C2031.16,-734.61 1959.44,-727.27 1871.14,-727.27 1782.84,-727.27 1711.12,-734.61 1711.12,-743.64"/>
<text xml:space="preserve" text-anchor="start" x="1830.02" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="1822.74" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="1739.81" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars, location images and the venue</text>
<text xml:space="preserve" text-anchor="start" x="1777.32" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">map, re&#45;encoded on upload.</text>
</g>
<!-- attendee -->
<g id="node5" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-767 0,-767 0,-587 320.04,-587 320.04,-767"/>
<text xml:space="preserve" text-anchor="start" x="119.99" y="-689" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="21.61" y="-666" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs,</text>
<text xml:space="preserve" text-anchor="start" x="59.14" y="-648" font-family="Arial" font-size="15.00" fill="#bfdbfe">books slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- siteadmin -->
<g id="node6" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-477 0,-477 0,-297 320.04,-297 320.04,-477"/>
<text xml:space="preserve" text-anchor="start" x="112.77" y="-399" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="20.36" y="-376" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="135.84" y="-358" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- pushservice -->
<g id="node7" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2031.16,-180 1711.12,-180 1711.12,0 2031.16,0 2031.16,-180"/>
<text xml:space="preserve" text-anchor="start" x="1770.55" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="1731.47" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="1842.37" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- reverseproxy -->
<g id="node8" class="node">
<title>reverseproxy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="920.08,-1041 600.04,-1041 600.04,-861 920.08,-861 920.08,-1041"/>
<text xml:space="preserve" text-anchor="start" x="695.59" y="-963" font-family="Arial" font-size="20.00" fill="#f8fafc">Reverse proxy</text>
<text xml:space="preserve" text-anchor="start" x="638.34" y="-940" font-family="Arial" font-size="15.00" fill="#cbd5e1">Terminates TLS. Not part of the app;</text>
<text xml:space="preserve" text-anchor="start" x="665.01" y="-922" font-family="Arial" font-size="15.00" fill="#cbd5e1">documented for self&#45;hosters.</text>
</g>
<!-- smtp -->
<g id="node9" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2031.16,-1050 1711.12,-1050 1711.12,-870 2031.16,-870 2031.16,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1807.23" y="-963" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="1814.88" y="-940" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- web&#45;&gt;server -->
<g id="edge5" class="edge">
<title>web&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M919.99,-532C990.12,-532 1072.63,-532 1143.9,-532"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1143.81,-534.63 1151.31,-532 1143.81,-529.38 1143.81,-534.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.58,-532 1020.58,-557 1053.58,-557 1053.58,-532 1020.58,-532"/>
<text xml:space="preserve" text-anchor="start" x="1020.58" y="-543" font-family="Arial" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge7" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1473.78,-488.54C1544.62,-469.15 1628.19,-446.26 1700.29,-426.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1700.92,-429.06 1707.46,-424.55 1699.53,-424 1700.92,-429.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1534.12,-469.61 1534.12,-507.61 1651.12,-507.61 1651.12,-469.61 1534.12,-469.61"/>
<text xml:space="preserve" text-anchor="start" x="1534.12" y="-493.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="1534.12" y="-479.81" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- server&#45;&gt;files -->
<g id="edge8" class="edge">
<title>server&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1473.78,-571.45C1544.62,-589.06 1628.19,-609.84 1700.29,-627.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1699.53,-630.29 1707.44,-629.55 1700.8,-625.19 1699.53,-630.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1540.12,-613.36 1540.12,-638.36 1645.12,-638.36 1645.12,-613.36 1540.12,-613.36"/>
<text xml:space="preserve" text-anchor="start" x="1540.12" y="-624.36" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- server&#45;&gt;pushservice -->
<g id="edge6" class="edge">
<title>server&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1428.09,-442.02C1521.5,-367.63 1653.84,-262.25 1749.34,-186.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1750.71,-188.46 1754.94,-181.74 1747.44,-184.36 1750.71,-188.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1534.62,-350.59 1534.62,-375.59 1650.62,-375.59 1650.62,-350.59 1534.62,-350.59"/>
<text xml:space="preserve" text-anchor="start" x="1534.62" y="-361.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- server&#45;&gt;smtp -->
<g id="edge9" class="edge">
<title>server&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1424.25,-621.99C1503.02,-686.22 1612.43,-773.98 1711.12,-848 1718.26,-853.36 1725.62,-858.8 1733.09,-864.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1731.16,-866.11 1738.77,-868.4 1734.25,-861.86 1731.16,-866.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1548.62,-797.77 1548.62,-822.77 1636.62,-822.77 1636.62,-797.77 1548.62,-797.77"/>
<text xml:space="preserve" text-anchor="start" x="1548.62" y="-808.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- attendee&#45;&gt;web -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.71,-638.52C403.1,-618.31 505.3,-593.53 590.15,-572.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="590.53,-575.56 597.2,-571.24 589.3,-570.46 590.53,-575.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="382.04,-621.75 382.04,-646.75 538.04,-646.75 538.04,-621.75 382.04,-621.75"/>
<text xml:space="preserve" text-anchor="start" x="382.04" y="-632.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses, installs on phone</text>
</g>
<!-- siteadmin&#45;&gt;web -->
<g id="edge2" class="edge">
<title>siteadmin&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.71,-425.48C403.1,-445.69 505.3,-470.47 590.15,-491.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="589.3,-493.54 597.2,-492.76 590.53,-488.44 589.3,-493.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.04,-476.75 380.04,-501.75 540.04,-501.75 540.04,-476.75 380.04,-476.75"/>
<text xml:space="preserve" text-anchor="start" x="380.04" y="-487.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">administers installation</text>
</g>
<!-- pushservice&#45;&gt;web -->
<g id="edge3" class="edge">
<title>pushservice&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1711.13,-148.05C1565.49,-201.78 1344.3,-284.78 1154.08,-362 1079.92,-392.11 998.62,-426.96 929.3,-457.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="928.64,-454.67 922.82,-460.08 930.74,-459.48 928.64,-454.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1266.1,-362 1266.1,-387 1362.1,-387 1362.1,-362 1266.1,-362"/>
<text xml:space="preserve" text-anchor="start" x="1266.1" y="-373" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
<!-- reverseproxy&#45;&gt;server -->
<g id="edge4" class="edge">
<title>reverseproxy&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M901.64,-861.07C907.91,-856.71 914.08,-852.34 920.08,-848 1016.97,-777.95 1122.33,-692.71 1199.55,-628.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1201,-630.64 1205.08,-623.82 1197.64,-626.6 1201,-630.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="980.08,-798.83 980.08,-823.83 1094.08,-823.83 1094.08,-798.83 980.08,-798.83"/>
<text xml:space="preserve" text-anchor="start" x="980.08" y="-809.83" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards HTTPS</text>
</g>
</g>
</svg>
`;case`server`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3319pt" height="1846pt"
 viewBox="0.00 0.00 3319.00 1846.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1831.25)">
<g id="clust1" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-261 8,-1530.2 2469,-1530.2 2469,-261 8,-261"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1517.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- mvenue -->
<g id="node1" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1469 47.98,-1469 47.98,-1289 368.02,-1289 368.02,-1469"/>
<text xml:space="preserve" text-anchor="start" x="180.75" y="-1391" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="77.95" y="-1368" font-family="Arial" font-size="15.00" fill="#bfdbfe">Locations (rooms, areas), their images,</text>
<text xml:space="preserve" text-anchor="start" x="107.11" y="-1350" font-family="Arial" font-size="15.00" fill="#bfdbfe">colours and unavailable times.</text>
</g>
<!-- mcomments -->
<g id="node2" class="node">
<title>mcomments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1469 477.98,-1469 477.98,-1289 798.02,-1289 798.02,-1469"/>
<text xml:space="preserve" text-anchor="start" x="591.88" y="-1391" font-family="Arial" font-size="20.00" fill="#eff6ff">comments</text>
<text xml:space="preserve" text-anchor="start" x="508.77" y="-1368" font-family="Arial" font-size="15.00" fill="#bfdbfe">Comments on proposals, sessions and</text>
<text xml:space="preserve" text-anchor="start" x="561.3" y="-1350" font-family="Arial" font-size="15.00" fill="#bfdbfe">profiles, and their likes.</text>
</g>
<!-- msettings -->
<g id="node3" class="node">
<title>msettings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1144 47.98,-1144 47.98,-964 368.02,-964 368.02,-1144"/>
<text xml:space="preserve" text-anchor="start" x="173.54" y="-1057" font-family="Arial" font-size="20.00" fill="#eff6ff">settings</text>
<text xml:space="preserve" text-anchor="start" x="165.06" y="-1034" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site settings.</text>
</g>
<!-- mupdates -->
<g id="node4" class="node">
<title>mupdates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1144 477.98,-1144 477.98,-964 798.02,-964 798.02,-1144"/>
<text xml:space="preserve" text-anchor="start" x="602.41" y="-1066" font-family="Arial" font-size="20.00" fill="#eff6ff">updates</text>
<text xml:space="preserve" text-anchor="start" x="511.26" y="-1043" font-family="Arial" font-size="15.00" fill="#bfdbfe">The daily look&#45;up of the latest release,</text>
<text xml:space="preserve" text-anchor="start" x="570.88" y="-1025" font-family="Arial" font-size="15.00" fill="#bfdbfe">shown to the admin.</text>
</g>
<!-- http -->
<g id="node5" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1689.02,-1469 1368.98,-1469 1368.98,-1289 1689.02,-1289 1689.02,-1469"/>
<text xml:space="preserve" text-anchor="start" x="1484" y="-1409.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1491.78" y="-1388.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1385.58" y="-1367.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from</text>
<text xml:space="preserve" text-anchor="start" x="1414.35" y="-1349.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">the contracts package. Gates, rate</text>
<text xml:space="preserve" text-anchor="start" x="1426.47" y="-1331.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">limiting, problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node6" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-1469 907.98,-1469 907.98,-1289 1228.02,-1289 1228.02,-1469"/>
<text xml:space="preserve" text-anchor="start" x="1010.73" y="-1409.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1054.99" y="-1388.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="933.78" y="-1367.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="953.76" y="-1349.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="963.78" y="-1331.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node7" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2396.02,-1469 2075.98,-1469 2075.98,-1289 2396.02,-1289 2396.02,-1469"/>
<text xml:space="preserve" text-anchor="start" x="2214.88" y="-1400" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="2099.24" y="-1377" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single leased loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="2119.29" y="-1359" font-family="Arial" font-size="15.00" fill="#bfdbfe">deliveries (email, push), reminders,</text>
<text xml:space="preserve" text-anchor="start" x="2167.2" y="-1341" font-family="Arial" font-size="15.00" fill="#bfdbfe">pruning. Idempotent.</text>
</g>
<!-- mpeople -->
<g id="node8" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1139.02,-806 818.98,-806 818.98,-626 1139.02,-626 1139.02,-806"/>
<text xml:space="preserve" text-anchor="start" x="948.97" y="-728" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="840.61" y="-705" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="848.94" y="-687" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- mnotifications -->
<g id="node9" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2429.02,-1144 2108.98,-1144 2108.98,-964 2429.02,-964 2429.02,-1144"/>
<text xml:space="preserve" text-anchor="start" x="2216.19" y="-1075" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="2173.1" y="-1052" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push</text>
<text xml:space="preserve" text-anchor="start" x="2128.51" y="-1034" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions. Email and push delivery run</text>
<text xml:space="preserve" text-anchor="start" x="2216.46" y="-1016" font-family="Arial" font-size="15.00" fill="#bfdbfe">in the jobs loop.</text>
</g>
<!-- mproposals -->
<g id="node10" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1569.02,-806 1248.98,-806 1248.98,-626 1569.02,-626 1569.02,-806"/>
<text xml:space="preserve" text-anchor="start" x="1365.64" y="-719" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="1316.86" y="-696" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, hosts and votes.</text>
</g>
<!-- msessions -->
<g id="node11" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1999.02,-806 1678.98,-806 1678.98,-626 1999.02,-626 1999.02,-806"/>
<text xml:space="preserve" text-anchor="start" x="1800.09" y="-728" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="1711.86" y="-705" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="1783.54" y="-687" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- mmeetings -->
<g id="node12" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2429.02,-806 2108.98,-806 2108.98,-626 2429.02,-626 2429.02,-806"/>
<text xml:space="preserve" text-anchor="start" x="2228.42" y="-728" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="2146.85" y="-705" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="2246.9" y="-687" font-family="Arial" font-size="15.00" fill="#bfdbfe">points.</text>
</g>
<!-- kernel -->
<g id="node13" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="868.02,-481 547.98,-481 547.98,-301 868.02,-301 868.02,-481"/>
<text xml:space="preserve" text-anchor="start" x="679.09" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="564.18" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="578.36" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- mevents -->
<g id="node14" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2429.02,-481 2108.98,-481 2108.98,-301 2429.02,-301 2429.02,-481"/>
<text xml:space="preserve" text-anchor="start" x="2239.54" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="2125.17" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Events, days, phases, time zone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="2150.18" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings including the identity mode.</text>
</g>
<!-- web -->
<g id="node15" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1458.02,-1816.2 1137.98,-1816.2 1137.98,-1636.2 1458.02,-1636.2 1458.02,-1816.2"/>
<text xml:space="preserve" text-anchor="start" x="1257.98" y="-1748" font-family="Arial" font-size="20.00" fill="#eff6ff">Web app</text>
<text xml:space="preserve" text-anchor="start" x="1213.11" y="-1727" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Vite, TypeScript, PWA</text>
<text xml:space="preserve" text-anchor="start" x="1160.42" y="-1705.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Static single&#45;page app. Holds a per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1171.28" y="-1687.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">replica and renders every view from it.</text>
</g>
<!-- smtp -->
<g id="node16" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2859.02,-1144 2538.98,-1144 2538.98,-964 2859.02,-964 2859.02,-1144"/>
<text xml:space="preserve" text-anchor="start" x="2635.09" y="-1057" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="2642.74" y="-1034" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node17" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3289.02,-1144 2968.98,-1144 2968.98,-964 3289.02,-964 3289.02,-1144"/>
<text xml:space="preserve" text-anchor="start" x="3028.41" y="-1066" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="2989.33" y="-1043" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="3100.23" y="-1025" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- db -->
<g id="node18" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2214.02,-163.64C2214.02,-172.67 2142.3,-180 2054,-180 1965.7,-180 1893.98,-172.67 1893.98,-163.64 1893.98,-163.64 1893.98,-16.36 1893.98,-16.36 1893.98,-7.33 1965.7,0 2054,0 2142.3,0 2214.02,-7.33 2214.02,-16.36 2214.02,-16.36 2214.02,-163.64 2214.02,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2214.02,-163.64C2214.02,-154.61 2142.3,-147.27 2054,-147.27 1965.7,-147.27 1893.98,-154.61 1893.98,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1979.5" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">SQLite database</text>
<text xml:space="preserve" text-anchor="start" x="1998.37" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SQLite, WAL mode</text>
<text xml:space="preserve" text-anchor="start" x="1915.98" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">State tables plus the append&#45;only change</text>
<text xml:space="preserve" text-anchor="start" x="1975.2" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">log. One file to back up.</text>
</g>
<!-- files -->
<g id="node19" class="node">
<title>files</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M2644.02,-163.64C2644.02,-172.67 2572.3,-180 2484,-180 2395.7,-180 2323.98,-172.67 2323.98,-163.64 2323.98,-163.64 2323.98,-16.36 2323.98,-16.36 2323.98,-7.33 2395.7,0 2484,0 2572.3,0 2644.02,-7.33 2644.02,-16.36 2644.02,-16.36 2644.02,-163.64 2644.02,-163.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M2644.02,-163.64C2644.02,-154.61 2572.3,-147.27 2484,-147.27 2395.7,-147.27 2323.98,-154.61 2323.98,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="2442.88" y="-111.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">File store</text>
<text xml:space="preserve" text-anchor="start" x="2435.6" y="-90.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Directory on disk</text>
<text xml:space="preserve" text-anchor="start" x="2352.67" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Avatars, location images and the venue</text>
<text xml:space="preserve" text-anchor="start" x="2390.18" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">map, re&#45;encoded on upload.</text>
</g>
<!-- mvenue&#45;&gt;msettings -->
<!-- mcomments&#45;&gt;mupdates -->
<!-- http&#45;&gt;mpeople -->
<g id="edge4" class="edge">
<title>http&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1406.21,-1289.02C1354.39,-1248.15 1295.43,-1197.02 1249,-1144 1159.06,-1041.29 1078.67,-905.62 1029.47,-815.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1031.83,-813.89 1025.95,-808.54 1027.21,-816.39 1031.83,-813.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1249,-1041.5 1249,-1066.5 1428,-1066.5 1428,-1041.5 1249,-1041.5"/>
<text xml:space="preserve" text-anchor="start" x="1249" y="-1052.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">signs in, resolves the actor</text>
</g>
<!-- http&#45;&gt;mproposals -->
<g id="edge5" class="edge">
<title>http&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1512.88,-1289.2C1490.54,-1166.13 1450.29,-944.42 1426.99,-816.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1429.6,-815.78 1425.68,-808.87 1424.43,-816.72 1429.6,-815.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1484.83,-1041.5 1484.83,-1066.5 1609.83,-1066.5 1609.83,-1041.5 1484.83,-1041.5"/>
<text xml:space="preserve" text-anchor="start" x="1484.83" y="-1052.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge6" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1619.19,-1289.34C1702.36,-1200.72 1820.09,-1056.09 1869,-904 1878,-876 1877.05,-844.73 1872,-815.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1874.63,-815.66 1870.63,-808.79 1869.47,-816.65 1874.63,-815.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1843.85,-1041.5 1843.85,-1066.5 1968.85,-1066.5 1968.85,-1041.5 1843.85,-1041.5"/>
<text xml:space="preserve" text-anchor="start" x="1843.85" y="-1052.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">invokes use cases</text>
</g>
<!-- feed&#45;&gt;kernel -->
<g id="edge7" class="edge">
<title>feed&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1022.94,-1289.11C980.03,-1204.96 913.22,-1075.3 853,-964 814.64,-893.12 789.64,-882.41 764,-806 729.12,-702.04 715.91,-576.47 710.93,-491.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="713.56,-490.97 710.52,-483.63 708.31,-491.26 713.56,-490.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="815.27,-872.5 815.27,-897.5 934.27,-897.5 934.27,-872.5 815.27,-872.5"/>
<text xml:space="preserve" text-anchor="start" x="815.27" y="-883.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads change log</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge8" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2245.06,-1289.31C2249.34,-1247.38 2254.47,-1197.18 2258.88,-1154.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2261.47,-1154.51 2259.62,-1146.78 2256.25,-1153.98 2261.47,-1154.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2253.49,-1204 2253.49,-1229 2446.49,-1229 2446.49,-1204 2253.49,-1204"/>
<text xml:space="preserve" text-anchor="start" x="2253.49" y="-1215" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs reactions and deliveries</text>
</g>
<!-- jobs&#45;&gt;smtp -->
<g id="edge9" class="edge">
<title>jobs&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2382.18,-1289.14C2412.55,-1269.83 2444.09,-1249.15 2473,-1229 2508.35,-1204.36 2545.79,-1176.37 2579.8,-1150.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2581.19,-1152.39 2585.52,-1145.73 2577.98,-1148.24 2581.19,-1152.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2504.6,-1204 2504.6,-1229 2592.6,-1229 2592.6,-1204 2504.6,-1204"/>
<text xml:space="preserve" text-anchor="start" x="2504.6" y="-1215" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends email</text>
</g>
<!-- jobs&#45;&gt;pushservice -->
<g id="edge10" class="edge">
<title>jobs&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2395.88,-1325.84C2533.89,-1280.09 2738.19,-1210.66 2914,-1144 2928.86,-1138.37 2944.23,-1132.36 2959.6,-1126.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2960.37,-1128.76 2966.35,-1123.53 2958.42,-1123.88 2960.37,-1128.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2747.78,-1204 2747.78,-1229 2863.78,-1229 2863.78,-1204 2747.78,-1204"/>
<text xml:space="preserve" text-anchor="start" x="2747.78" y="-1215" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends Web Push</text>
</g>
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge12" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2109.17,-993.15C1978.36,-943.85 1788.73,-871.62 1624,-806 1609.16,-800.09 1593.77,-793.88 1578.37,-787.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1579.51,-785.24 1571.58,-784.84 1577.53,-790.1 1579.51,-785.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1871.57,-866 1871.57,-904 1949.57,-904 1949.57,-866 1871.57,-866"/>
<text xml:space="preserve" text-anchor="start" x="1871.57" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1871.57" y="-876.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;msessions -->
<g id="edge13" class="edge">
<title>mnotifications&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2155.18,-964.06C2095.29,-917.26 2021.83,-859.87 1960.8,-812.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1962.57,-810.23 1955.05,-807.68 1959.34,-814.36 1962.57,-810.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2066.89,-866 2066.89,-904 2144.89,-904 2144.89,-866 2066.89,-866"/>
<text xml:space="preserve" text-anchor="start" x="2066.89" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="2066.89" y="-876.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge14" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2269,-964.28C2269,-918.82 2269,-863.31 2269,-816.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2271.63,-816.45 2269,-808.95 2266.38,-816.45 2271.63,-816.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2269,-866 2269,-904 2347,-904 2347,-866 2269,-866"/>
<text xml:space="preserve" text-anchor="start" x="2269" y="-890" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="2269" y="-876.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge15" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1679.1,-645.89C1660.66,-638.79 1642.02,-632 1624,-626 1368.05,-540.81 1063.2,-468.56 877.73,-427.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="878.46,-425.22 870.57,-426.17 877.33,-430.35 878.46,-425.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1426.13,-541 1426.13,-566 1542.13,-566 1542.13,-541 1426.13,-541"/>
<text xml:space="preserve" text-anchor="start" x="1426.13" y="-552" font-family="Arial" font-size="14.00" fill="#c9c9c9">records changes</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge16" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2269,-626.31C2269,-584.47 2269,-534.39 2269,-491.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2271.63,-491.3 2269,-483.8 2266.38,-491.3 2271.63,-491.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2269,-541 2269,-566 2424,-566 2424,-541 2269,-541"/>
<text xml:space="preserve" text-anchor="start" x="2269" y="-552" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases and days</text>
</g>
<!-- mevents&#45;&gt;db -->
<g id="edge17" class="edge">
<title>mevents&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2176.24,-261C2158.88,-236.86 2140.99,-211.98 2124.44,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2126.88,-187.86 2120.38,-183.31 2122.62,-190.93 2126.88,-187.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2030.39,-220.87 2030.39,-258.87 2147.39,-258.87 2147.39,-220.87 2030.39,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="2030.39" y="-244.87" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
<text xml:space="preserve" text-anchor="start" x="2030.39" y="-231.07" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ SQL via ports ]</text>
</g>
<!-- mevents&#45;&gt;files -->
<g id="edge18" class="edge">
<title>mevents&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2361.76,-261C2379.12,-236.86 2397.01,-211.98 2413.56,-188.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2415.38,-190.93 2417.62,-183.31 2411.12,-187.86 2415.38,-190.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2285.61,-220.87 2285.61,-245.87 2390.61,-245.87 2390.61,-220.87 2285.61,-220.87"/>
<text xml:space="preserve" text-anchor="start" x="2285.61" y="-231.87" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores uploads</text>
</g>
<!-- web&#45;&gt;http -->
<g id="edge2" class="edge">
<title>web&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1357.49,-1636.3C1390.03,-1587.68 1430.39,-1527.35 1463.79,-1477.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1465.84,-1479.1 1467.83,-1471.41 1461.48,-1476.18 1465.84,-1479.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1420.43,-1538.2 1420.43,-1576.2 1579.43,-1576.2 1579.43,-1538.2 1420.43,-1538.2"/>
<text xml:space="preserve" text-anchor="start" x="1420.43" y="-1562.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1420.43" y="-1548.4" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- web&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>web&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1187.22,-1636.35C1168.71,-1617.9 1151.01,-1597.53 1137,-1576.2 1117.69,-1546.8 1103.08,-1511.36 1092.4,-1478.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1094.9,-1477.95 1090.13,-1471.6 1089.9,-1479.54 1094.9,-1477.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137,-1538.2 1137,-1576.2 1361,-1576.2 1361,-1538.2 1137,-1538.2"/>
<text xml:space="preserve" text-anchor="start" x="1137" y="-1562.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="1137" y="-1548.4" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
</g>
</g>
</svg>
`;case`modules`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="1174pt"
 viewBox="0.00 0.00 1640.00 1174.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1159.05)">
<!-- mvenue -->
<g id="node1" class="node">
<title>mvenue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="132.77" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">venue</text>
<text xml:space="preserve" text-anchor="start" x="29.97" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Locations (rooms, areas), their images,</text>
<text xml:space="preserve" text-anchor="start" x="59.13" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">colours and unavailable times.</text>
</g>
<!-- mpeople -->
<g id="node2" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-518 0,-518 0,-338 320.04,-338 320.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="129.99" y="-440" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="21.63" y="-417" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="29.96" y="-399" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- mcomments -->
<g id="node3" class="node">
<title>mcomments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-843 0,-843 0,-663 320.04,-663 320.04,-843"/>
<text xml:space="preserve" text-anchor="start" x="113.9" y="-765" font-family="Arial" font-size="20.00" fill="#eff6ff">comments</text>
<text xml:space="preserve" text-anchor="start" x="30.79" y="-742" font-family="Arial" font-size="15.00" fill="#bfdbfe">Comments on proposals, sessions and</text>
<text xml:space="preserve" text-anchor="start" x="83.32" y="-724" font-family="Arial" font-size="15.00" fill="#bfdbfe">profiles, and their likes.</text>
</g>
<!-- msettings -->
<g id="node4" class="node">
<title>msettings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1144 0,-1144 0,-964 320.04,-964 320.04,-1144"/>
<text xml:space="preserve" text-anchor="start" x="125.56" y="-1057" font-family="Arial" font-size="20.00" fill="#eff6ff">settings</text>
<text xml:space="preserve" text-anchor="start" x="117.08" y="-1034" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site settings.</text>
</g>
<!-- mnotifications -->
<g id="node5" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="967.21" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="924.12" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push</text>
<text xml:space="preserve" text-anchor="start" x="879.53" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions. Email and push delivery run</text>
<text xml:space="preserve" text-anchor="start" x="967.48" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">in the jobs loop.</text>
</g>
<!-- mproposals -->
<g id="node6" class="node">
<title>mproposals</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-518 430,-518 430,-338 750.04,-338 750.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="546.66" y="-431" font-family="Arial" font-size="20.00" fill="#eff6ff">proposals</text>
<text xml:space="preserve" text-anchor="start" x="497.88" y="-408" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposals, hosts and votes.</text>
</g>
<!-- msessions -->
<g id="node7" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-518 860,-518 860,-338 1180.04,-338 1180.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="981.11" y="-440" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="892.88" y="-417" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="964.56" y="-399" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- mmeetings -->
<g id="node8" class="node">
<title>mmeetings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-518 1290,-518 1290,-338 1610.04,-338 1610.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="1409.44" y="-440" font-family="Arial" font-size="20.00" fill="#eff6ff">meetings</text>
<text xml:space="preserve" text-anchor="start" x="1327.87" y="-417" font-family="Arial" font-size="15.00" fill="#bfdbfe">1&#45;on&#45;1 requests, availability, meeting</text>
<text xml:space="preserve" text-anchor="start" x="1427.92" y="-399" font-family="Arial" font-size="15.00" fill="#bfdbfe">points.</text>
</g>
<!-- mevents -->
<g id="node9" class="node">
<title>mevents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-843 1290,-843 1290,-663 1610.04,-663 1610.04,-843"/>
<text xml:space="preserve" text-anchor="start" x="1420.56" y="-765" font-family="Arial" font-size="20.00" fill="#eff6ff">events</text>
<text xml:space="preserve" text-anchor="start" x="1306.19" y="-742" font-family="Arial" font-size="15.00" fill="#bfdbfe">Events, days, phases, time zone, per&#45;event</text>
<text xml:space="preserve" text-anchor="start" x="1331.2" y="-724" font-family="Arial" font-size="15.00" fill="#bfdbfe">settings including the identity mode.</text>
</g>
<!-- mupdates -->
<g id="node10" class="node">
<title>mupdates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-180 1290,-180 1290,0 1610.04,0 1610.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1414.43" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">updates</text>
<text xml:space="preserve" text-anchor="start" x="1323.28" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">The daily look&#45;up of the latest release,</text>
<text xml:space="preserve" text-anchor="start" x="1382.9" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">shown to the admin.</text>
</g>
<!-- mvenue&#45;&gt;mpeople -->
<!-- mpeople&#45;&gt;mcomments -->
<!-- mcomments&#45;&gt;msettings -->
<!-- mnotifications&#45;&gt;mproposals -->
<g id="edge4" class="edge">
<title>mnotifications&#45;&gt;mproposals</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M906.2,-179.94C846.31,-226.74 772.85,-284.13 711.82,-331.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="710.36,-329.64 706.07,-336.32 713.59,-333.77 710.36,-329.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="817.91,-240 817.91,-278 895.91,-278 895.91,-240 817.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="817.91" y="-264" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="817.91" y="-250.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;msessions -->
<g id="edge5" class="edge">
<title>mnotifications&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1020.02,-179.72C1020.02,-225.18 1020.02,-280.69 1020.02,-327.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1017.4,-327.55 1020.02,-335.05 1022.65,-327.55 1017.4,-327.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.02,-240 1020.02,-278 1098.02,-278 1098.02,-240 1020.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="1020.02" y="-264" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1020.02" y="-250.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mnotifications&#45;&gt;mmeetings -->
<g id="edge6" class="edge">
<title>mnotifications&#45;&gt;mmeetings</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1133.84,-179.94C1193.73,-226.74 1267.19,-284.13 1328.22,-331.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1326.45,-333.77 1333.97,-336.32 1329.68,-329.64 1326.45,-333.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1247.91,-240 1247.91,-278 1325.91,-278 1325.91,-240 1247.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="1247.91" y="-264" font-family="Arial" font-size="14.00" fill="#c9c9c9">reacts to</text>
<text xml:space="preserve" text-anchor="start" x="1247.91" y="-250.2" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ change log ]</text>
</g>
<!-- mmeetings&#45;&gt;mevents -->
<g id="edge7" class="edge">
<title>mmeetings&#45;&gt;mevents</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1450.02,-517.69C1450.02,-559.53 1450.02,-609.61 1450.02,-652.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1447.4,-652.7 1450.02,-660.2 1452.65,-652.7 1447.4,-652.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1450.02,-578 1450.02,-603 1605.02,-603 1605.02,-578 1450.02,-578"/>
<text xml:space="preserve" text-anchor="start" x="1450.02" y="-589" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads phases and days</text>
</g>
</g>
</svg>
`;case`web`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1736pt" height="1264pt"
 viewBox="0.00 0.00 1736.00 1264.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1249.45)">
<g id="clust1" class="cluster">
<title>cluster_web</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-961.4 845,-961.4 845,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-948.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WEB APP</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_server</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="868,-8 868,-289.2 1698,-289.2 1698,-8 868,-8"/>
<text xml:space="preserve" text-anchor="start" x="876" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SERVER</text>
</g>
<!-- pwa -->
<g id="node1" class="node">
<title>pwa</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-900.2 47.98,-900.2 47.98,-720.2 368.02,-720.2 368.02,-900.2"/>
<text xml:space="preserve" text-anchor="start" x="149.1" y="-832" font-family="Arial" font-size="20.00" fill="#eff6ff">PWA runtime</text>
<text xml:space="preserve" text-anchor="start" x="165.02" y="-811" font-family="Arial" font-size="13.00" fill="#bfdbfe">Service worker</text>
<text xml:space="preserve" text-anchor="start" x="81.27" y="-789.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Cached shell, push notifications, kiosk</text>
<text xml:space="preserve" text-anchor="start" x="165.48" y="-771.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">keep&#45;awake.</text>
</g>
<!-- commands -->
<g id="node2" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-900.2 477.98,-900.2 477.98,-720.2 798.02,-720.2 798.02,-900.2"/>
<text xml:space="preserve" text-anchor="start" x="586.87" y="-831.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="512.94" y="-808.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain</text>
<text xml:space="preserve" text-anchor="start" x="514.61" y="-790.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">policy, call the API, reconcile with the</text>
<text xml:space="preserve" text-anchor="start" x="576.3" y="-772.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed change.</text>
</g>
<!-- shell -->
<g id="node3" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-575.2 47.98,-575.2 47.98,-395.2 368.02,-395.2 368.02,-575.2"/>
<text xml:space="preserve" text-anchor="start" x="147.41" y="-497.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="69.58" y="-474.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="128.37" y="-456.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- replica -->
<g id="node4" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-575.2 477.98,-575.2 477.98,-395.2 798.02,-395.2 798.02,-575.2"/>
<text xml:space="preserve" text-anchor="start" x="604.65" y="-506.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="500.43" y="-483.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see</text>
<text xml:space="preserve" text-anchor="start" x="506.04" y="-465.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it. Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="598.81" y="-447.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="575.75" y="-159" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="517.08" y="-136" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="507.1" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="503.56" y="-100" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
</g>
<!-- http -->
<g id="node6" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-228 1337.98,-228 1337.98,-48 1658.02,-48 1658.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1453" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1460.78" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1354.58" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from</text>
<text xml:space="preserve" text-anchor="start" x="1383.35" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">the contracts package. Gates, rate</text>
<text xml:space="preserve" text-anchor="start" x="1395.47" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">limiting, problem&#45;details errors.</text>
</g>
<!-- feed -->
<g id="node7" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1010.73" y="-168.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="1054.99" y="-147.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="933.78" y="-126.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="953.76" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="963.78" y="-90.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- pushservice -->
<g id="node8" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="368.02,-1234.4 47.98,-1234.4 47.98,-1054.4 368.02,-1054.4 368.02,-1234.4"/>
<text xml:space="preserve" text-anchor="start" x="107.41" y="-1156.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="68.33" y="-1133.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="179.23" y="-1115.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- pwa&#45;&gt;shell -->
<g id="edge2" class="edge">
<title>pwa&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-720.51C208,-678.67 208,-628.59 208,-585.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-585.5 208,-578 205.38,-585.5 210.63,-585.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-635.2 208,-660.2 356,-660.2 356,-635.2 208,-635.2"/>
<text xml:space="preserve" text-anchor="start" x="208" y="-646.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">installs, delivers push</text>
</g>
<!-- commands&#45;&gt;replica -->
<g id="edge3" class="edge">
<title>commands&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-720.51C638,-678.67 638,-628.59 638,-585.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-585.5 638,-578 635.38,-585.5 640.63,-585.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-635.2 638,-660.2 805,-660.2 805,-635.2 638,-635.2"/>
<text xml:space="preserve" text-anchor="start" x="638" y="-646.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">predicts, then reconciles</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M754.05,-720.34C779.75,-700.58 806.83,-679.72 832,-660.2 1022.94,-512.17 1243.59,-339.09 1376.86,-234.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1378.46,-236.41 1382.74,-229.72 1375.22,-232.29 1378.46,-236.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1166.02,-466.2 1166.02,-504.2 1325.02,-504.2 1325.02,-466.2 1166.02,-466.2"/>
<text xml:space="preserve" text-anchor="start" x="1166.02" y="-490.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">commands and queries</text>
<text xml:space="preserve" text-anchor="start" x="1166.02" y="-476.4" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ HTTPS / JSON ]</text>
</g>
<!-- shell&#45;&gt;features -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M318.74,-395.3C380.18,-345.97 456.62,-284.61 519.3,-234.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="520.7,-236.53 524.91,-229.79 517.41,-232.44 520.7,-236.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-303.7 435.89,-328.7 504.89,-328.7 504.89,-303.7 435.89,-303.7"/>
<text xml:space="preserve" text-anchor="start" x="435.89" y="-314.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes to</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-395.3C638,-347.28 638,-287.85 638,-238.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-238.42 638,-230.92 635.38,-238.42 640.63,-238.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-303.7 638,-328.7 732,-328.7 732,-303.7 638,-303.7"/>
<text xml:space="preserve" text-anchor="start" x="638" y="-314.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">renders from</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M748.74,-395.3C810.18,-345.97 886.62,-284.61 949.3,-234.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="950.7,-236.53 954.91,-229.79 947.41,-232.44 950.7,-236.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.89,-297.2 865.89,-335.2 1089.89,-335.2 1089.89,-297.2 865.89,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="865.89" y="-321.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">snapshot, then changes since seq</text>
<text xml:space="preserve" text-anchor="start" x="865.89" y="-307.4" font-family="Arial" font-size="11.00" fill="#c9c9c9">[ Server&#45;Sent Events ]</text>
</g>
<!-- pushservice&#45;&gt;pwa -->
<g id="edge1" class="edge">
<title>pushservice&#45;&gt;pwa</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1054.81C208,-1010.32 208,-956.26 208,-910.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-910.64 208,-903.14 205.38,-910.64 210.63,-910.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-969.4 208,-994.4 304,-994.4 304,-969.4 208,-969.4"/>
<text xml:space="preserve" text-anchor="start" x="208" y="-980.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivers push</text>
</g>
</g>
</svg>
`;case`flowRsvp`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4364pt" height="466pt"
 viewBox="0.00 0.00 4364.00 466.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 451.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-341 0,-341 0,-161 320.04,-161 320.04,-341"/>
<text xml:space="preserve" text-anchor="start" x="119.99" y="-263" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="21.61" y="-240" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs,</text>
<text xml:space="preserve" text-anchor="start" x="59.14" y="-222" font-family="Arial" font-size="15.00" fill="#bfdbfe">books slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- features -->
<g id="node2" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="950.05,-341 630.01,-341 630.01,-161 950.05,-161 950.05,-341"/>
<text xml:space="preserve" text-anchor="start" x="727.79" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="669.12" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="659.13" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="655.59" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
</g>
<!-- commands -->
<g id="node3" class="node">
<title>commands</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1524.01,-341 1203.97,-341 1203.97,-161 1524.01,-161 1524.01,-341"/>
<text xml:space="preserve" text-anchor="start" x="1312.86" y="-272" font-family="Arial" font-size="20.00" fill="#eff6ff">Commands</text>
<text xml:space="preserve" text-anchor="start" x="1238.93" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every mutation: predict with a domain</text>
<text xml:space="preserve" text-anchor="start" x="1240.6" y="-231" font-family="Arial" font-size="15.00" fill="#bfdbfe">policy, call the API, reconcile with the</text>
<text xml:space="preserve" text-anchor="start" x="1302.29" y="-213" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed change.</text>
</g>
<!-- replica -->
<g id="node4" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2605.67,-180 2285.63,-180 2285.63,0 2605.67,0 2605.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="2412.3" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="2308.07" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see</text>
<text xml:space="preserve" text-anchor="start" x="2313.68" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">it. Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="2406.45" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- http -->
<g id="node5" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2225.63,-436 1905.59,-436 1905.59,-256 2225.63,-256 2225.63,-436"/>
<text xml:space="preserve" text-anchor="start" x="2020.6" y="-376.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="2028.39" y="-355.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1922.19" y="-334.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from</text>
<text xml:space="preserve" text-anchor="start" x="1950.96" y="-316.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">the contracts package. Gates, rate</text>
<text xml:space="preserve" text-anchor="start" x="1963.08" y="-298.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">limiting, problem&#45;details errors.</text>
</g>
<!-- msessions -->
<g id="node6" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2985.71,-436 2665.67,-436 2665.67,-256 2985.71,-256 2985.71,-436"/>
<text xml:space="preserve" text-anchor="start" x="2786.78" y="-358" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="2698.55" y="-335" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="2770.23" y="-317" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- kernel -->
<g id="node7" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3720.39,-436 3400.35,-436 3400.35,-256 3720.39,-256 3720.39,-436"/>
<text xml:space="preserve" text-anchor="start" x="3531.46" y="-358" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="3416.55" y="-335" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="3430.73" y="-317" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- feed -->
<g id="node8" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4334.08,-265 4014.04,-265 4014.04,-85 4334.08,-85 4334.08,-265"/>
<text xml:space="preserve" text-anchor="start" x="4116.79" y="-205.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="4161.05" y="-184.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="4039.83" y="-163.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="4059.81" y="-145.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="4069.83" y="-127.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;features -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.9,-251C411.49,-251 526.6,-251 619.87,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="619.73,-253.63 627.23,-251 619.73,-248.38 619.73,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-254 383.04,-286.8 407.04,-286.8 407.04,-254 383.04,-254"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-254 410.04,-286.8 567.01,-286.8 567.01,-254 410.04,-254"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps RSVP on a session</text>
</g>
<!-- features&#45;&gt;commands -->
<g id="edge2" class="edge">
<title>features&#45;&gt;commands</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M949.97,-251C1025.9,-251 1116.83,-251 1194.01,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1193.79,-253.63 1201.29,-251 1193.79,-248.38 1193.79,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1013.05,-254 1013.05,-286.8 1037.05,-286.8 1037.05,-254 1013.05,-254"/>
<text xml:space="preserve" text-anchor="start" x="1021.16" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1040.05,-254 1040.05,-286.8 1140.97,-286.8 1140.97,-254 1040.05,-254"/>
<text xml:space="preserve" text-anchor="start" x="1043.05" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp(sessionId)</text>
</g>
<!-- commands&#45;&gt;replica -->
<g id="edge3" class="edge">
<title>commands&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1513.38,-161.06C1536.36,-150.38 1560.35,-140.96 1584.01,-134.4 1817.26,-69.75 2099.4,-69.08 2275.5,-77.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2275.25,-79.96 2282.87,-77.7 2275.51,-74.72 2275.25,-79.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1587.4,-137.4 1587.4,-177 1611.4,-177 1611.4,-137.4 1587.4,-137.4"/>
<text xml:space="preserve" text-anchor="start" x="1595.51" y="-154" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1614.4,-137.4 1614.4,-177 1842.19,-177 1842.19,-137.4 1614.4,-137.4"/>
<text xml:space="preserve" text-anchor="start" x="1617.4" y="-160" font-family="Arial" font-size="14.00" fill="#c9c9c9">apply predicted change (policy says</text>
<text xml:space="preserve" text-anchor="start" x="1628.68" y="-143.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">allowed, capacity not exceeded)</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge4" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1523.88,-281.3C1544.09,-284.78 1564.51,-288.11 1584.01,-291 1687.1,-306.3 1803.18,-319.69 1895.43,-329.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1894.96,-332.01 1902.69,-330.19 1895.5,-326.79 1894.96,-332.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1592.85,-326.99 1592.85,-383.39 1616.85,-383.39 1616.85,-326.99 1592.85,-326.99"/>
<text xml:space="preserve" text-anchor="start" x="1600.96" y="-351.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1619.85,-326.99 1619.85,-383.39 1836.74,-383.39 1836.74,-326.99 1619.85,-326.99"/>
<text xml:space="preserve" text-anchor="start" x="1622.85" y="-366.39" font-family="Arial" font-size="14.00" fill="#c9c9c9">PUT /sessions/{id}/rsvps/{guestId}</text>
<text xml:space="preserve" text-anchor="start" x="1669.16" y="-349.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">(Idempotency&#45;Key)</text>
<text xml:space="preserve" text-anchor="start" x="1680.85" y="-332.79" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS / JSON</text>
</g>
<!-- commands&#45;&gt;http -->
<g id="edge9" class="edge">
<title>commands&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1534.14,-217.21C1627.37,-204.7 1744.39,-199.14 1845.59,-225.2 1872.71,-232.18 1900.07,-243.32 1925.82,-256.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1533.82,-214.6 1526.75,-218.23 1534.54,-219.8 1533.82,-214.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1587.01,-228.2 1587.01,-261 1611.01,-261 1611.01,-228.2 1587.01,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1595.12" y="-241.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1614.01,-228.2 1614.01,-261 1842.59,-261 1842.59,-228.2 1614.01,-228.2"/>
<text xml:space="preserve" text-anchor="start" x="1617.01" y="-239" font-family="Arial" font-size="14.00" fill="#c9c9c9">the result, with the recorded change</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge8" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2615.83,-98.33C2949.71,-114.77 3689.14,-151.17 4014.34,-167.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2616.23,-95.72 2608.61,-97.97 2615.97,-100.96 2616.23,-95.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3064.86,-136.66 3064.86,-193.06 3088.86,-193.06 3088.86,-136.66 3064.86,-136.66"/>
<text xml:space="preserve" text-anchor="start" x="3072.96" y="-161.66" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3091.86,-136.66 3091.86,-193.06 3321.2,-193.06 3321.2,-136.66 3091.86,-136.66"/>
<text xml:space="preserve" text-anchor="start" x="3094.86" y="-176.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">change seq N to every viewer of the</text>
<text xml:space="preserve" text-anchor="start" x="3107.31" y="-159.26" font-family="Arial" font-size="14.00" fill="#c9c9c9">event (this one matches it to the</text>
<text xml:space="preserve" text-anchor="start" x="3117.04" y="-142.46" font-family="Arial" font-size="14.00" fill="#c9c9c9">prediction by command_key)</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge5" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2225.53,-346C2351.5,-346 2527.1,-346 2655.64,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2655.45,-348.63 2662.95,-346 2655.45,-343.38 2655.45,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2299.58,-349 2299.58,-388.6 2323.58,-388.6 2323.58,-349 2299.58,-349"/>
<text xml:space="preserve" text-anchor="start" x="2307.68" y="-365.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2326.58,-349 2326.58,-388.6 2591.72,-388.6 2591.72,-349 2326.58,-349"/>
<text xml:space="preserve" text-anchor="start" x="2329.58" y="-371.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">rsvp use case: check phase and capacity,</text>
<text xml:space="preserve" text-anchor="start" x="2395.73" y="-354.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">write, record change</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge6" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2985.67,-346C3105.1,-346 3268.38,-346 3390.21,-346"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3389.86,-348.63 3397.36,-346 3389.86,-343.38 3389.86,-348.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3048.71,-349 3048.71,-381.8 3072.71,-381.8 3072.71,-349 3048.71,-349"/>
<text xml:space="preserve" text-anchor="start" x="3056.81" y="-362.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3075.71,-349 3075.71,-381.8 3337.35,-381.8 3337.35,-349 3075.71,-349"/>
<text xml:space="preserve" text-anchor="start" x="3078.71" y="-359.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">commit state + change in one transaction</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge7" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3720.09,-301.63C3807.35,-277.24 3915.59,-246.98 4004.37,-222.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4004.84,-224.75 4011.36,-220.2 4003.43,-219.7 4004.84,-224.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3783.39,-283.84 3783.39,-316.64 3807.39,-316.64 3807.39,-283.84 3783.39,-283.84"/>
<text xml:space="preserve" text-anchor="start" x="3791.5" y="-297.04" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3810.39,-283.84 3810.39,-316.64 3951.04,-316.64 3951.04,-283.84 3810.39,-283.84"/>
<text xml:space="preserve" text-anchor="start" x="3813.39" y="-294.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish change seq N</text>
</g>
</g>
</svg>
`;case`flowSessionChanged`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2992pt" height="1080pt"
 viewBox="0.00 0.00 2992.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<!-- siteadmin -->
<g id="node1" class="node">
<title>siteadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="112.77" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Site admin</text>
<text xml:space="preserve" text-anchor="start" x="20.36" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs the installation: site settings, guests,</text>
<text xml:space="preserve" text-anchor="start" x="135.84" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">events.</text>
</g>
<!-- http -->
<g id="node2" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1010.31,-180 690.27,-180 690.27,0 1010.31,0 1010.31,-180"/>
<text xml:space="preserve" text-anchor="start" x="805.29" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="813.07" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="706.87" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from</text>
<text xml:space="preserve" text-anchor="start" x="735.64" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">the contracts package. Gates, rate</text>
<text xml:space="preserve" text-anchor="start" x="747.76" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">limiting, problem&#45;details errors.</text>
</g>
<!-- msessions -->
<g id="node3" class="node">
<title>msessions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1673.02,-180 1352.98,-180 1352.98,0 1673.02,0 1673.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="1474.09" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">sessions</text>
<text xml:space="preserve" text-anchor="start" x="1385.86" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sessions, RSVPs, room unavailability,</text>
<text xml:space="preserve" text-anchor="start" x="1457.54" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">attendee counts.</text>
</g>
<!-- kernel -->
<g id="node4" class="node">
<title>kernel</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2300.71,-180 1980.67,-180 1980.67,0 2300.71,0 2300.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="2111.78" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Kernel</text>
<text xml:space="preserve" text-anchor="start" x="1996.87" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Unit of work, change log, actor, Result. The</text>
<text xml:space="preserve" text-anchor="start" x="2011.04" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">shared code every module may import.</text>
</g>
<!-- feed -->
<g id="node5" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2961.88,-180 2641.84,-180 2641.84,0 2961.88,0 2961.88,-180"/>
<text xml:space="preserve" text-anchor="start" x="2744.59" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2788.86" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2667.64" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2687.62" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="2697.64" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- jobs -->
<g id="node6" class="node">
<title>jobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-760 0,-760 0,-580 320.04,-580 320.04,-760"/>
<text xml:space="preserve" text-anchor="start" x="138.9" y="-691" font-family="Arial" font-size="20.00" fill="#eff6ff">Jobs</text>
<text xml:space="preserve" text-anchor="start" x="23.26" y="-668" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single leased loop: reactions to changes,</text>
<text xml:space="preserve" text-anchor="start" x="43.31" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">deliveries (email, push), reminders,</text>
<text xml:space="preserve" text-anchor="start" x="91.22" y="-632" font-family="Arial" font-size="15.00" fill="#bfdbfe">pruning. Idempotent.</text>
</g>
<!-- mnotifications -->
<g id="node7" class="node">
<title>mnotifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1010.31,-1050 690.27,-1050 690.27,-870 1010.31,-870 1010.31,-1050"/>
<text xml:space="preserve" text-anchor="start" x="797.48" y="-981" font-family="Arial" font-size="20.00" fill="#eff6ff">notifications</text>
<text xml:space="preserve" text-anchor="start" x="754.39" y="-958" font-family="Arial" font-size="15.00" fill="#bfdbfe">In&#45;app notifications and push</text>
<text xml:space="preserve" text-anchor="start" x="709.8" y="-940" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions. Email and push delivery run</text>
<text xml:space="preserve" text-anchor="start" x="797.75" y="-922" font-family="Arial" font-size="15.00" fill="#bfdbfe">in the jobs loop.</text>
</g>
<!-- smtp -->
<g id="node8" class="node">
<title>smtp</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1010.31,-760 690.27,-760 690.27,-580 1010.31,-580 1010.31,-760"/>
<text xml:space="preserve" text-anchor="start" x="786.38" y="-673" font-family="Arial" font-size="20.00" fill="#f8fafc">Email provider</text>
<text xml:space="preserve" text-anchor="start" x="794.03" y="-650" font-family="Arial" font-size="15.00" fill="#cbd5e1">Any SMTP relay.</text>
</g>
<!-- pushservice -->
<g id="node9" class="node">
<title>pushservice</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1010.31,-470 690.27,-470 690.27,-290 1010.31,-290 1010.31,-470"/>
<text xml:space="preserve" text-anchor="start" x="749.7" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">Browser push services</text>
<text xml:space="preserve" text-anchor="start" x="710.62" y="-369" font-family="Arial" font-size="15.00" fill="#cbd5e1">Web Push endpoints operated by browser</text>
<text xml:space="preserve" text-anchor="start" x="821.52" y="-351" font-family="Arial" font-size="15.00" fill="#cbd5e1">vendors.</text>
</g>
<!-- siteadmin&#45;&gt;http -->
<g id="edge1" class="edge">
<title>siteadmin&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-90C427.68,-90 570.22,-90 680.22,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="679.9,-92.63 687.4,-90 679.9,-87.38 679.9,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431.46,-93 431.46,-125.8 455.46,-125.8 455.46,-93 431.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="439.57" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="458.46,-93 458.46,-125.8 578.85,-125.8 578.85,-93 458.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="461.46" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">PUT /sessions/{id}</text>
</g>
<!-- http&#45;&gt;msessions -->
<g id="edge2" class="edge">
<title>http&#45;&gt;msessions</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1009.97,-90C1110.46,-90 1240.31,-90 1342.77,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1342.7,-92.63 1350.2,-90 1342.7,-87.38 1342.7,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1073.31,-93 1073.31,-125.8 1097.31,-125.8 1097.31,-93 1073.31,-93"/>
<text xml:space="preserve" text-anchor="start" x="1081.42" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1100.31,-93 1100.31,-125.8 1289.98,-125.8 1289.98,-93 1100.31,-93"/>
<text xml:space="preserve" text-anchor="start" x="1103.31" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">update use case: clash check</text>
</g>
<!-- msessions&#45;&gt;kernel -->
<g id="edge3" class="edge">
<title>msessions&#45;&gt;kernel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1672.69,-90C1763.69,-90 1877.87,-90 1970.56,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1970.36,-92.63 1977.86,-90 1970.36,-87.38 1970.36,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1736.02,-93 1736.02,-125.8 1760.02,-125.8 1760.02,-93 1736.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1744.13" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1763.02,-93 1763.02,-125.8 1917.67,-125.8 1917.67,-93 1763.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1766.02" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">record session.changed</text>
</g>
<!-- kernel&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>kernel&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2300.41,-90C2400.5,-90 2529.65,-90 2631.67,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2631.56,-92.63 2639.06,-90 2631.56,-87.38 2631.56,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2363.71,-93 2363.71,-125.8 2387.71,-125.8 2387.71,-93 2363.71,-93"/>
<text xml:space="preserve" text-anchor="start" x="2371.81" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2390.71,-93 2390.71,-125.8 2578.84,-125.8 2578.84,-93 2390.71,-93"/>
<text xml:space="preserve" text-anchor="start" x="2393.71" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">publish to the event audience</text>
</g>
<!-- jobs&#45;&gt;mnotifications -->
<g id="edge5" class="edge">
<title>jobs&#45;&gt;mnotifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-736.9C427.9,-782.45 570.79,-842.66 680.89,-889.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="679.71,-891.4 687.64,-891.89 681.75,-886.56 679.71,-891.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-869.2 383.04,-925.6 407.04,-925.6 407.04,-869.2 383.04,-869.2"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-894.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-869.2 410.04,-925.6 627.27,-925.6 627.27,-869.2 410.04,-869.2"/>
<text xml:space="preserve" text-anchor="start" x="428.96" y="-908.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reaction: session.changed &#45;&gt;</text>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-891.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">notifications for hosts and RSVP&#39;d</text>
<text xml:space="preserve" text-anchor="start" x="487.91" y="-875" font-family="Arial" font-size="14.00" fill="#c9c9c9">attendees</text>
</g>
<!-- jobs&#45;&gt;smtp -->
<g id="edge6" class="edge">
<title>jobs&#45;&gt;smtp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-670C427.68,-670 570.22,-670 680.22,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="679.9,-672.63 687.4,-670 679.9,-667.38 679.9,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.92,-673 443.92,-705.8 467.92,-705.8 467.92,-673 443.92,-673"/>
<text xml:space="preserve" text-anchor="start" x="452.02" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="470.92,-673 470.92,-705.8 566.39,-705.8 566.39,-673 470.92,-673"/>
<text xml:space="preserve" text-anchor="start" x="473.92" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivery: email</text>
</g>
<!-- jobs&#45;&gt;pushservice -->
<g id="edge7" class="edge">
<title>jobs&#45;&gt;pushservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-603.1C427.9,-557.55 570.79,-497.34 680.89,-450.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="681.75,-453.44 687.64,-448.11 679.71,-448.6 681.75,-453.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="445.47,-579.2 445.47,-612 469.47,-612 469.47,-579.2 445.47,-579.2"/>
<text xml:space="preserve" text-anchor="start" x="453.57" y="-592.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="472.47,-579.2 472.47,-612 564.84,-612 564.84,-579.2 472.47,-579.2"/>
<text xml:space="preserve" text-anchor="start" x="475.47" y="-590" font-family="Arial" font-size="14.00" fill="#c9c9c9">delivery: push</text>
</g>
</g>
</svg>
`;case`flowJoin`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2469pt" height="512pt"
 viewBox="0.00 0.00 2469.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- attendee -->
<g id="node1" class="node">
<title>attendee</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-334 0,-334 0,-154 320.04,-154 320.04,-334"/>
<text xml:space="preserve" text-anchor="start" x="119.99" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Attendee</text>
<text xml:space="preserve" text-anchor="start" x="21.61" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Proposes and votes on sessions, RSVPs,</text>
<text xml:space="preserve" text-anchor="start" x="59.14" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">books slots, arranges 1&#45;on&#45;1s.</text>
</g>
<!-- shell -->
<g id="node2" class="node">
<title>shell</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="983.52,-334 663.48,-334 663.48,-154 983.52,-154 983.52,-334"/>
<text xml:space="preserve" text-anchor="start" x="762.91" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Shell &amp; router</text>
<text xml:space="preserve" text-anchor="start" x="685.08" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Routes, layout, auth gate, theme. Nothing</text>
<text xml:space="preserve" text-anchor="start" x="743.87" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">here knows the domain.</text>
</g>
<!-- http -->
<g id="node3" class="node">
<title>http</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1708.46,-482 1388.42,-482 1388.42,-302 1708.46,-302 1708.46,-482"/>
<text xml:space="preserve" text-anchor="start" x="1503.43" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">HTTP API</text>
<text xml:space="preserve" text-anchor="start" x="1511.22" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">OpenAPI 3.1</text>
<text xml:space="preserve" text-anchor="start" x="1405.02" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Versioned REST endpoints generated from</text>
<text xml:space="preserve" text-anchor="start" x="1433.79" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">the contracts package. Gates, rate</text>
<text xml:space="preserve" text-anchor="start" x="1445.9" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">limiting, problem&#45;details errors.</text>
</g>
<!-- mpeople -->
<g id="node4" class="node">
<title>mpeople</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2438.85,-482 2118.81,-482 2118.81,-302 2438.85,-302 2438.85,-482"/>
<text xml:space="preserve" text-anchor="start" x="2248.8" y="-404" font-family="Arial" font-size="20.00" fill="#eff6ff">people</text>
<text xml:space="preserve" text-anchor="start" x="2140.44" y="-381" font-family="Arial" font-size="15.00" fill="#bfdbfe">Guests, profiles, sign&#45;in, passwords, login</text>
<text xml:space="preserve" text-anchor="start" x="2148.78" y="-363" font-family="Arial" font-size="15.00" fill="#bfdbfe">sessions, join links, the site&#45;admin role.</text>
</g>
<!-- replica -->
<g id="node5" class="node">
<title>replica</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1708.46,-180 1388.42,-180 1388.42,0 1708.46,0 1708.46,-180"/>
<text xml:space="preserve" text-anchor="start" x="1515.09" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1410.86" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see</text>
<text xml:space="preserve" text-anchor="start" x="1416.47" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">it. Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="1509.24" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- feed -->
<g id="node6" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2438.85,-180 2118.81,-180 2118.81,0 2438.85,0 2438.85,-180"/>
<text xml:space="preserve" text-anchor="start" x="2221.56" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2265.83" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2144.61" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2164.59" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="2174.61" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- attendee&#45;&gt;shell -->
<g id="edge1" class="edge">
<title>attendee&#45;&gt;shell</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.88,-244C420.49,-244 550.49,-244 653.07,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="653.02,-246.63 660.52,-244 653.02,-241.38 653.02,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-247 383.04,-279.8 407.04,-279.8 407.04,-247 383.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-247 410.04,-279.8 600.48,-279.8 600.48,-247 410.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens /join/{token} from email</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge2" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M983.25,-278.33C1003.53,-282.64 1024.01,-286.95 1043.52,-291 1154.9,-314.11 1280.32,-339.25 1378.17,-358.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1377.62,-361.24 1385.49,-360.12 1378.64,-356.09 1377.62,-361.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1096.31,-349.6 1096.31,-382.4 1120.31,-382.4 1120.31,-349.6 1096.31,-349.6"/>
<text xml:space="preserve" text-anchor="start" x="1104.42" y="-362.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1123.31,-349.6 1123.31,-382.4 1275.63,-382.4 1275.63,-349.6 1123.31,-349.6"/>
<text xml:space="preserve" text-anchor="start" x="1126.31" y="-360.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /auth/join {token}</text>
</g>
<!-- shell&#45;&gt;http -->
<g id="edge4" class="edge">
<title>shell&#45;&gt;http</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M993.72,-204.07C1093.73,-188.07 1221.34,-181.11 1328.42,-218.4 1377.79,-235.59 1424.4,-269.07 1461.83,-302.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="993.47,-201.45 986.5,-205.26 994.33,-206.63 993.47,-201.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1046.52,-221.4 1046.52,-261 1070.52,-261 1070.52,-221.4 1046.52,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1054.63" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1073.52,-221.4 1073.52,-261 1325.42,-261 1325.42,-221.4 1073.52,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1076.52" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">Set&#45;Cookie (httpOnly, SameSite=Lax) +</text>
<text xml:space="preserve" text-anchor="start" x="1159.39" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">actor context</text>
</g>
<!-- shell&#45;&gt;replica -->
<g id="edge5" class="edge">
<title>shell&#45;&gt;replica</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M970.15,-154.04C993.96,-142.58 1018.91,-132.37 1043.52,-125.2 1151.98,-93.61 1278.88,-84.9 1378.2,-84.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1378.13,-86.67 1385.61,-84 1378.1,-81.42 1378.13,-86.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.16,-128.2 1137.16,-161 1161.16,-161 1161.16,-128.2 1137.16,-128.2"/>
<text xml:space="preserve" text-anchor="start" x="1145.27" y="-141.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1164.16,-128.2 1164.16,-161 1234.77,-161 1234.77,-128.2 1164.16,-128.2"/>
<text xml:space="preserve" text-anchor="start" x="1167.16" y="-139" font-family="Arial" font-size="14.00" fill="#c9c9c9">load event</text>
</g>
<!-- http&#45;&gt;mpeople -->
<g id="edge3" class="edge">
<title>http&#45;&gt;mpeople</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1708.39,-392C1826.65,-392 1987.78,-392 2108.46,-392"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2108.38,-394.63 2115.88,-392 2108.38,-389.38 2108.38,-394.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1783.51,-395 1783.51,-434.6 1807.51,-434.6 1807.51,-395 1783.51,-395"/>
<text xml:space="preserve" text-anchor="start" x="1791.62" y="-411.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1810.51,-395 1810.51,-434.6 2043.76,-434.6 2043.76,-395 1810.51,-395"/>
<text xml:space="preserve" text-anchor="start" x="1813.51" y="-417.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">validate token, create a verified login</text>
<text xml:space="preserve" text-anchor="start" x="1903.4" y="-400.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">session</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge6" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1708.39,-90C1826.65,-90 1987.78,-90 2108.46,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2108.38,-92.63 2115.88,-90 2108.38,-87.38 2108.38,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1771.46,-93 1771.46,-132.6 1795.46,-132.6 1795.46,-93 1771.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="1779.56" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1798.46,-93 1798.46,-132.6 2055.81,-132.6 2055.81,-93 1798.46,-93"/>
<text xml:space="preserve" text-anchor="start" x="1801.46" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET snapshot, then subscribe since seq</text>
<text xml:space="preserve" text-anchor="start" x="1866.44" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
</g>
</svg>
`;case`flowReconnect`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2530pt" height="512pt"
 viewBox="0.00 0.00 2530.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1766.86,-334 1446.82,-334 1446.82,-154 1766.86,-154 1766.86,-334"/>
<text xml:space="preserve" text-anchor="start" x="1573.49" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Replica</text>
<text xml:space="preserve" text-anchor="start" x="1469.26" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copy of one event as the viewer may see</text>
<text xml:space="preserve" text-anchor="start" x="1474.87" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">it. Snapshot + change feed, persisted in</text>
<text xml:space="preserve" text-anchor="start" x="1567.64" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">IndexedDB.</text>
</g>
<!-- feed -->
<g id="node4" class="node">
<title>feed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2500.4,-482 2180.36,-482 2180.36,-302 2500.4,-302 2500.4,-482"/>
<text xml:space="preserve" text-anchor="start" x="2283.11" y="-422.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Change feed</text>
<text xml:space="preserve" text-anchor="start" x="2327.37" y="-401.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SSE</text>
<text xml:space="preserve" text-anchor="start" x="2206.15" y="-380.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Per&#45;viewer stream of changes filtered by</text>
<text xml:space="preserve" text-anchor="start" x="2226.13" y="-362.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">audience, resumable by sequence</text>
<text xml:space="preserve" text-anchor="start" x="2236.15" y="-344.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">number. Also builds snapshots.</text>
</g>
<!-- features -->
<g id="node5" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2500.4,-180 2180.36,-180 2180.36,0 2500.4,0 2500.4,-180"/>
<text xml:space="preserve" text-anchor="start" x="2278.13" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature views</text>
<text xml:space="preserve" text-anchor="start" x="2219.46" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schedule, proposals, voting, people,</text>
<text xml:space="preserve" text-anchor="start" x="2209.48" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">meetings, notifications, settings, admin.</text>
<text xml:space="preserve" text-anchor="start" x="2205.93" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pure functions of replica + local UI state.</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1043.81,-244C1160.17,-244 1317.96,-244 1436.73,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1436.49,-246.63 1443.99,-244 1436.49,-241.38 1436.49,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1107.24,-247 1107.24,-286.6 1131.24,-286.6 1131.24,-247 1107.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1115.34" y="-263.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1134.24,-247 1134.24,-286.6 1383.82,-286.6 1383.82,-247 1134.24,-247"/>
<text xml:space="preserve" text-anchor="start" x="1137.24" y="-269.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">load persisted replica (seq 4120), show</text>
<text xml:space="preserve" text-anchor="start" x="1199.58" y="-252.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">&quot;last synced 14:02&quot;</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge3" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M1766.57,-278.39C1786.85,-282.69 1807.33,-286.98 1826.86,-291 1941.29,-314.55 2070.34,-339.98 2170.32,-359.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2169.68,-361.98 2177.54,-360.83 2170.68,-356.82 2169.68,-361.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1887.25,-352.32 1887.25,-391.92 1911.25,-391.92 1911.25,-352.32 1887.25,-352.32"/>
<text xml:space="preserve" text-anchor="start" x="1895.36" y="-368.92" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1914.25,-352.32 1914.25,-391.92 2059.96,-391.92 2059.96,-352.32 1914.25,-352.32"/>
<text xml:space="preserve" text-anchor="start" x="1917.25" y="-374.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET feed?since=4120</text>
<text xml:space="preserve" text-anchor="start" x="1926.41" y="-358.12" font-family="Arial" font-size="14.00" fill="#c9c9c9">Server&#45;Sent Events</text>
</g>
<!-- replica&#45;&gt;feed -->
<g id="edge4" class="edge">
<title>replica&#45;&gt;feed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1776.79,-204.11C1878.98,-187.59 2010.33,-180.08 2120.36,-218.4 2169.73,-235.59 2216.34,-269.07 2253.77,-302.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1776.64,-201.47 1769.67,-205.29 1777.5,-206.65 1776.64,-201.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1829.86,-221.4 1829.86,-261 1853.86,-261 1853.86,-221.4 1829.86,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1837.96" y="-238" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1856.86,-221.4 1856.86,-261 2117.36,-261 2117.36,-221.4 1856.86,-221.4"/>
<text xml:space="preserve" text-anchor="start" x="1859.86" y="-244" font-family="Arial" font-size="14.00" fill="#c9c9c9">changes 4121..4187, or a reset message</text>
<text xml:space="preserve" text-anchor="start" x="1910.84" y="-227.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">if pruned → full snapshot</text>
</g>
<!-- replica&#45;&gt;features -->
<g id="edge5" class="edge">
<title>replica&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1753.48,-154.02C1777.29,-142.56 1802.24,-132.35 1826.86,-125.2 1938.23,-92.84 2068.69,-84.27 2170.12,-83.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2169.95,-86.3 2177.44,-83.65 2169.93,-81.05 2169.95,-86.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1866.44,-128.2 1866.44,-161 1890.44,-161 1890.44,-128.2 1866.44,-128.2"/>
<text xml:space="preserve" text-anchor="start" x="1874.55" y="-141.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1893.44,-128.2 1893.44,-161 2080.77,-161 2080.77,-128.2 1893.44,-128.2"/>
<text xml:space="preserve" text-anchor="start" x="1896.44" y="-139" font-family="Arial" font-size="14.00" fill="#c9c9c9">re&#45;render, banner disappears</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};