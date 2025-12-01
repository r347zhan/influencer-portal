// src/data/foodBankCampaign.ts

export const foodBankCampaign = {
  title: "Food Banks Canada | Holiday Hunger Relief",
  brand: "Food Banks Canada",
  description:
    "Creator campaign to raise awareness and donations for local food banks across Canada.",

  influencers: [
    {
      name: "almostffamous",
      handle: "almostffamous",
      platform: "Instagram",
      approvalStatus: "Approved",        // 或 Pending / Rejected
      followers: "300K",                 // 你可以填 PDF 里的真实粉丝数
      engagements: "",               // 也可以用总互动数 / 平均互动
    },
    {
      name: "tinytrendsbyma",
      handle: "tinytrendsbyma",
      platform: "Instagram",
      approvalStatus: "Approved",
      followers: "28.6k",
      engagements: "",
    },
    {
      name: "rickmatharu",
      handle: "rickmatharu",
      platform: "Instagram",
      approvalStatus: "Approved",
      followers: "38.5k",
      engagements: "",
    },
  ],

   // 下面会加 posts，先预留一个空数组
   posts: [],
};