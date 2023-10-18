export const chartBoxUser = {
    color: "#8884d8",
    icon: "/src/assets/png/chart.png",
    title: "Total Users",
    dataKey: "users",
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/src/assets/png/analysis.png",
    title: "Total Produits Intéréssés",
    dataKey: "users",
  };

  export const barChartBoxVisit = {
    title: "Total Visite",
    color: "#FF8042",
    dataKey: "users",
  };

  export const singleProductData = {
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "interested", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };