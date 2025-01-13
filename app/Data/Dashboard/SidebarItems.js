const sidebarItems = [
    {
        item: "Dashboard",
        childItems: [
            { item: "Overview", path: "/dashboard/overview", icon: "" },
            { item: "Statistics", path: "/dashboard/statistics", icon: "" },
        ],
    },
    {
        item: "Categories",
        childItems: [
            { item: "Add Category", path: "/dashboard/categories/add", icon: "" },
            { item: "Manage Categories", path: "/dashboard/categories/manage", icon: "" },
        ],
    },
    {
        item: "Users",
        childItems: [
            { item: "Add User", path: "/users/add", icon: "" },
            { item: "Manage Users", path: "/users/manage", icon: "" },
        ],
    },
    {
        item: "Donations",
        childItems: [
            { item: "View Donations", path: "/donations/view", icon: "" },
            { item: "Add Donation", path: "/donations/add", icon: "" },
        ],
    },
    {
        item: "Blog Posts",
        childItems: [
            { item: "Create Post", path: "/blog-posts/create", icon: "" },
            { item: "Manage Posts", path: "/blog-posts/manage", icon: "" },
        ],
    },
    {
        item: "Events",
        childItems: [
            { item: "Upcoming Events", path: "/events/upcoming", icon: "" },
            { item: "Past Events", path: "/events/past", icon: "" },
        ],
    },
    {
        item: "Reports",
        childItems: [
            { item: "Sales Reports", path: "/reports/sales", icon: "" },
            { item: "User Reports", path: "/reports/users", icon: "" },
        ],
    },
];

export default sidebarItems;
