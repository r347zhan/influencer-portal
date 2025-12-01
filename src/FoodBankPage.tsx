import { useState } from "react";
import { foodBankCampaign } from "./data/foodBankCampaign";

type Influencer = {
  name: string;
  handle: string;
  platform: string;
  followers: number | string;
  engagements: number | string;
  approvalStatus?: string;
};

type Post = {
  id: string;
  influencer: string;
  platform: string;
  type: string; // Reel / Post / Story ...
  category: string; // Food, Family, Finance ...
  title: string;
  imageUrl?: string;
};

type Campaign = {
  title: string;
  brand?: string;
  description?: string;
  influencers: Influencer[];
  posts?: Post[];
};

const campaign = foodBankCampaign as Campaign;

export default function FoodBankPage() {
  const [activeTab, setActiveTab] = useState<
    "influencers" | "posts" | "deliverables" | "stats"
  >("influencers");

  return (
    <div className="page">
      {/* 顶部 Campaign 信息 */}
      <header className="campaign-header">
        <div className="logo-circle">FB</div>
        <div>
          <h1>{campaign.title}</h1>
          {campaign.brand && <p className="brand-line">Brand: {campaign.brand}</p>}
          {campaign.description && (
            <p className="campaign-desc">{campaign.description}</p>
          )}
        </div>
      </header>

      {/* Tabs */}
      <nav className="tabs">
        {["influencers", "posts", "deliverables", "stats"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "tab--active" : ""}`}
            onClick={() =>
              setActiveTab(tab as "influencers" | "posts" | "deliverables" | "stats")
            }
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Tab 内容区域 */}
      <main className="tab-content">
        {activeTab === "influencers" && (
          <InfluencersTable influencers={campaign.influencers} />
        )}

        {activeTab === "posts" && <PostsTab />}

        {activeTab === "stats" && <StatsTab />}

        {activeTab === "deliverables" && (
          <div style={{ padding: "24px", color: "#6b7280" }}>
            Deliverables tab will be built next.
          </div>
        )}
      </main>
    </div>
  );
}

/* ================= Influencers ================= */

function InfluencersTable({ influencers }: { influencers: Influencer[] }) {
  return (
    <div className="card">
      <table className="influencer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Platform</th>
            <th>Approval</th>
            <th>Followers</th>
            <th>Engagements</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((inf) => (
            <tr key={inf.handle}>
              <td>
                <div className="name-cell">
                  <div className="avatar">{inf.name[0]}</div>
                  <div>
                    <div className="name">{inf.name}</div>
                    <div className="handle">@{inf.handle}</div>
                  </div>
                </div>
              </td>
              <td>{inf.platform}</td>
              <td>{inf.approvalStatus ?? "-"}</td>
              <td>{inf.followers}</td>
              <td>{inf.engagements}</td>
              <td className="notes-cell">Add note…</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================= Posts ================= */

function PostsTab() {
  return (
    <div className="card">
      {/* 筛选栏 */}
      <div className="post-filters">
        <FilterSelect label="Platform" />
        <FilterSelect label="Influencer" />
        <FilterSelect label="Post Type" />
        <FilterSelect label="Category" />
      </div>

      {/* 占位内容 */}
      <div style={{ padding: "16px 0", color: "#6b7280", fontSize: 14 }}>
        Posts content will go here (coming soon).
      </div>
    </div>
  );
}

function FilterSelect({ label }: { label: string }) {
  return (
    <label className="filter-select">
      <span>{label}</span>
      <select>
        <option>All</option>
      </select>
    </label>
  );
}

/* ================= Stats ================= */

function StatsTab() {
  // 示例数据，后面可以从 data 里读
  const overview = [
    { label: "Total participants", value: "3" },
    { label: "Total followers", value: "97.1K" },
    { label: "Engagement rate", value: "9.8%" },
    { label: "Total engagements", value: "53.6K" },
    { label: "Total impressions", value: "540.1K" },
    { label: "Total reach", value: "6.2M" },
  ];

  const socialMetrics = [
    { label: "Total posts", value: "96" },
    { label: "Total likes", value: "42.7K" },
    { label: "Total comments", value: "1.9K" },
    { label: "Total shares", value: "9K" },
    { label: "Total views", value: "21.4K" },
    { label: "Total reels plays", value: "540.1K" },
  ];

  return (
    <div className="card stats-card">
      {/* Section 1: Overview */}
      <section className="stats-section">
        <h2 className="stats-title">Total campaign analytics</h2>
        <div className="stats-grid">
          {overview.map((item) => (
            <div key={item.label} className="stat-box">
              <div className="stat-label">{item.label}</div>
              <div className="stat-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Social media metrics */}
      <section className="stats-section">
        <h2 className="stats-title">Social media metrics</h2>
        <div className="stats-grid">
          {socialMetrics.map((item) => (
            <div key={item.label} className="stat-box">
              <div className="stat-label">{item.label}</div>
              <div className="stat-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Media Overview */}
      <section className="stats-section">
        <h2 className="stats-title">Media Overview</h2>

        <div className="media-overview">
          <div className="media-card">
            <div className="media-card__icon">$</div>
            <div>
              <div className="media-card__label">Post EMV</div>
              <div className="media-card__value">$27,865</div>
            </div>
          </div>

          <div className="media-card">
            <div className="media-card__icon">$</div>
            <div>
              <div className="media-card__label">Reel EMV</div>
              <div className="media-card__value">$43,202</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Audience */}
      <section className="stats-section">
        <h2 className="stats-title">Audience</h2>

        {/* Gender */}
        <div className="audience-block">
          <h3 className="audience-block__title">Audience by Gender</h3>

          <div className="gender-bars">
            <div className="gender-row">
              <span className="gender-label">Male</span>
              <div className="gender-bar male">
                <div className="bar-fill" style={{ width: "41%" }}></div>
              </div>
              <span className="gender-value">41%</span>
            </div>

            <div className="gender-row">
              <span className="gender-label">Female</span>
              <div className="gender-bar female">
                <div className="bar-fill" style={{ width: "59%" }}></div>
              </div>
              <span className="gender-value">59%</span>
            </div>
          </div>
        </div>

        {/* Age */}
        <div className="audience-block">
          <h3 className="audience-block__title">Audience by Age</h3>

          <div className="age-grid">
            {[
              { group: "13-17", male: 0, female: 2 },
              { group: "18-24", male: 7, female: 16 },
              { group: "25-34", male: 20, female: 28 },
              { group: "35-44", male: 9, female: 10 },
              { group: "45-64", male: 4, female: 3 },
              { group: "65-", male: 0, female: 0 },
            ].map((a) => (
              <div key={a.group} className="age-row">
                <div className="age-label">{a.group}</div>

                <div className="age-bars">
                  <div className="age-bar male">
                    <div className="bar-fill" style={{ width: `${a.male}%` }}></div>
                  </div>
                  <div className="age-bar female">
                    <div className="bar-fill" style={{ width: `${a.female}%` }}></div>
                  </div>
                </div>

                <div className="age-values">
                  <span className="male">{a.male}%</span>
                  <span className="female">{a.female}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="audience-block">
          <h3 className="audience-block__title">Audience Location</h3>

          <div className="location-columns">
            {/* Countries */}
            <div className="location-col">
              {[
                { place: "Canada", value: 69.6 },
                { place: "United States", value: 9.28 },
                { place: "France", value: 3.09 },
                { place: "Brazil", value: 0.66 },
                { place: "India", value: 0.07 },
              ].map((loc, i) => (
                <div key={loc.place} className="location-row">
                  <span className="location-rank">{i + 1}</span>
                  <span className="location-name">{loc.place}</span>
                  <div className="location-bar">
                    <div
                      className="bar-fill"
                      style={{ width: `${loc.value}%` }}
                    ></div>
                  </div>
                  <span className="location-value">{loc.value}%</span>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div className="location-col">
              {[
                { place: "Montreal", value: 42.18 },
                { place: "Toronto", value: 3.75 },
                { place: "New York City", value: 1.16 },
                { place: "Vancouver", value: 1.09 },
                { place: "Calgary", value: 0.84 },
              ].map((loc, i) => (
                <div key={loc.place} className="location-row">
                  <span className="location-rank">{i + 1}</span>
                  <span className="location-name">{loc.place}</span>
                  <div className="location-bar">
                    <div
                      className="bar-fill"
                      style={{ width: `${loc.value}%` }}
                    ></div>
                  </div>
                  <span className="location-value">{loc.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}