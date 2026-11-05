import { useMemo, useState, type ReactNode } from "react"

type Page = "dashboard" | "admin" | "audit" | "inventory" | "finance" | "testing"
type IconName = "grid" | "users" | "shield" | "box" | "wallet" | "activity" | "search" | "bell" | "chevron" | "menu" | "arrow-up" | "arrow-down" | "more" | "filter" | "download" | "plus" | "clock" | "check" | "warning" | "close" | "external" | "calendar" | "settings" | "logout"

function Icon({ name, size = 18 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    box: (
      <>
        <path d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path d="m3 8 9 5 9-5M3 8v8l9 5 9-5V8M12 13v8" />
      </>
    ),
    wallet: (
      <>
        <path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6" />
        <path d="M16 13h2" />
      </>
    ),
    activity: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-5 3 3 5-7" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    "arrow-up": (
      <>
        <path d="m18 15-6-6-6 6" />
        <path d="M12 9v12" />
      </>
    ),
    "arrow-down": (
      <>
        <path d="m6 9 6 6 6-6" />
        <path d="M12 3v12" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
    filter: <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />,
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    warning: (
      <>
        <path d="M12 3 2.8 20h18.4L12 3Z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 8.94 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H3v-4h.09A1.7 1.7 0 0 0 4.6 8.94a1.7 1.7 0 0 0-.34-1.88L4.2 7l2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3h4v.09a1.7 1.7 0 0 0 1.06 1.51 1.7 1.7 0 0 0 1.88-.34L17 4.2 19.83 7l-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 21 10v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    logout: (
      <>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const navItems: { id: Page label: string icon: IconName short: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "grid", short: "Overview" },
  { id: "admin", label: "Master Admin", icon: "users", short: "User & rules" },
  { id: "audit", label: "Audit Log", icon: "shield", short: "System trail" },
  { id: "inventory", label: "Inventory", icon: "box", short: "Stock control" },
  {
    id: "finance",
    label: "Finance & Sales",
    icon: "wallet",
    short: "Order & credit",
  },
  {
    id: "testing",
    label: "Integration Monitor",
    icon: "activity",
    short: "36 scenarios",
  },
]

const currency = (value: number) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(value)}`

function Badge({
  children,
  tone = "neutral",
  dot = false,
}: {
  children: ReactNode
  tone?: "success" | "warning" | "danger" | "info" | "neutral" | "purple"
  dot?: boolean
}) {
  return (
    <span className={`badge badge-${tone}`}>
      {dot && <i />}
      {children}
    </span>
  )
}

function Button({
  children,
  variant = "secondary",
  icon,
  onClick,
  disabled = false,
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "danger"
  icon?: IconName
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  )
}

function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <div className="page-header">
      <div>
        <div className="breadcrumb">
          Arunika ERP <span>/</span> {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  )
}

const kpis = [
  {
    label: "Penjualan Bersih",
    value: "Rp 8,42 M",
    delta: "+12,8%",
    trend: "up",
    note: "vs. bulan lalu",
    tone: "purple",
  },
  {
    label: "Nilai Persediaan",
    value: "Rp 3,18 M",
    delta: "+4,2%",
    trend: "up",
    note: "12 gudang aktif",
    tone: "teal",
  },
  {
    label: "Order Diproses",
    value: "1.284",
    delta: "+8,4%",
    trend: "up",
    note: "96,7% tepat waktu",
    tone: "blue",
  },
  {
    label: "Piutang Jatuh Tempo",
    value: "Rp 486 Jt",
    delta: "-3,1%",
    trend: "down",
    note: "42 pelanggan",
    tone: "orange",
  },
]

const salesBars = [42, 57, 49, 68, 61, 78, 70, 85, 76, 91, 84, 96]
const stockBars = [
  { label: "Beverage", available: 82, reserved: 12 },
  { label: "Personal Care", available: 65, reserved: 18 },
  { label: "Household", available: 73, reserved: 9 },
  { label: "Food", available: 58, reserved: 25 },
  { label: "Healthcare", available: 88, reserved: 7 },
]

function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Ringkasan operasional"
        description="Pantau performa distribusi dan anomali bisnis hari ini."
        actions={
          <>
            <Button icon="download">Ekspor</Button>
            <Button variant="primary" icon="plus">
              Buat pesanan
            </Button>
          </>
        }
      />
      <div className="filter-strip">
        <div className="field compact">
          <Icon name="calendar" size={16} />
          <span>01–31 Januari 2025</span>
          <Icon name="chevron" size={14} />
        </div>
        <div className="field compact">
          <span>Semua cabang</span>
          <Icon name="chevron" size={14} />
        </div>
        <div className="field compact">
          <span>Semua gudang</span>
          <Icon name="chevron" size={14} />
        </div>
        <span className="sync">
          <i /> Diperbarui 2 menit lalu
        </span>
      </div>
      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <article className="kpi-card" key={kpi.label}>
            <div className={`kpi-mark ${kpi.tone}`} />
            <div className="kpi-label">
              {kpi.label}
              <span className="info-dot">i</span>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-meta">
              <span
                className={
                  kpi.trend === "up" ? "trend positive" : "trend positive"
                }
              >
                <Icon
                  name={kpi.trend === "up" ? "arrow-up" : "arrow-down"}
                  size={13}
                />
                {kpi.delta}
              </span>
              <span>{kpi.note}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="dashboard-grid">
        <article className="panel sales-panel">
          <div className="panel-head">
            <div>
              <h2>Performa penjualan</h2>
              <p>Realisasi bulanan terhadap target</p>
            </div>
            <div className="legend">
              <span>
                <i className="purple-dot" />
                Realisasi
              </span>
              <span>
                <i className="gray-dot" />
                Target
              </span>
              <button>
                <Icon name="more" />
              </button>
            </div>
          </div>
          <div className="chart-wrap">
            <div className="y-labels">
              <span>10 M</span>
              <span>7,5 M</span>
              <span>5 M</span>
              <span>2,5 M</span>
              <span>0</span>
            </div>
            <div className="bar-chart">
              {salesBars.map((bar, i) => (
                <div className="bar-slot" key={i}>
                  <div
                    className="target-line"
                    style={{ bottom: `${Math.min(bar + 9, 98)}%` }}
                  />
                  <div className="sales-bar" style={{ height: `${bar}%` }} />
                  <span>
                    {
                      [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mei",
                        "Jun",
                        "Jul",
                        "Agu",
                        "Sep",
                        "Okt",
                        "Nov",
                        "Des",
                      ][i]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="panel alerts-panel">
          <div className="panel-head">
            <div>
              <h2>Perlu perhatian</h2>
              <p>Prioritas operasional hari ini</p>
            </div>
            <a>Lihat semua</a>
          </div>
          <div className="alert-list">
            <Alert
              icon="warning"
              tone="danger"
              title="18 SKU di bawah safety stock"
              detail="Gudang Cakung · membutuhkan replenishment"
              time="12 mnt"
            />
            <Alert
              icon="clock"
              tone="warning"
              title="27 batch mendekati kedaluwarsa"
              detail="Masa simpan kurang dari 60 hari"
              time="48 mnt"
            />
            <Alert
              icon="wallet"
              tone="info"
              title="9 order menunggu persetujuan kredit"
              detail="Total eksposur Rp 184.500.000"
              time="1 jam"
            />
            <Alert
              icon="activity"
              tone="success"
              title="Sinkronisasi marketplace selesai"
              detail="2.842 transaksi berhasil diproses"
              time="2 jam"
            />
          </div>
        </article>
        <article className="panel stock-panel">
          <div className="panel-head">
            <div>
              <h2>Kesehatan stok per kategori</h2>
              <p>Ketersediaan dan reservasi saat ini</p>
            </div>
            <button>
              <Icon name="more" />
            </button>
          </div>
          <div className="stock-list">
            {stockBars.map((item) => (
              <div className="stock-row" key={item.label}>
                <span>{item.label}</span>
                <div className="stack-track">
                  <i style={{ width: `${item.available}%` }} />
                  <b
                    style={{
                      width: `${item.reserved}%`,
                      left: `${item.available}%`,
                    }}
                  />
                </div>
                <strong>{item.available}%</strong>
              </div>
            ))}
          </div>
          <div className="stock-legend">
            <span>
              <i className="teal-dot" />
              Tersedia
            </span>
            <span>
              <i className="amber-dot" />
              Direservasi
            </span>
          </div>
        </article>
        <article className="panel orders-panel">
          <div className="panel-head">
            <div>
              <h2>Pesanan terbaru</h2>
              <p>Aktivitas 24 jam terakhir</p>
            </div>
            <a>Lihat daftar</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>ORDER</th>
                <th>PELANGGAN</th>
                <th>NILAI</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>SO-2501-0842</b>
                </td>
                <td>PT Sinar Mart</td>
                <td>Rp 24,8 Jt</td>
                <td>
                  <Badge tone="success" dot>
                    Diproses
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <b>SO-2501-0841</b>
                </td>
                <td>CV Bumi Retail</td>
                <td>Rp 18,2 Jt</td>
                <td>
                  <Badge tone="warning" dot>
                    Review kredit
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>
                  <b>SO-2501-0840</b>
                </td>
                <td>Toko Sejahtera</td>
                <td>Rp 9,6 Jt</td>
                <td>
                  <Badge tone="info" dot>
                    Picking
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </>
  )
}

function Alert({
  icon,
  tone,
  title,
  detail,
  time,
}: {
  icon: IconName
  tone: string
  title: string
  detail: string
  time: string
}) {
  return (
    <div className="alert-item">
      <span className={`alert-icon ${tone}`}>
        <Icon name={icon} size={17} />
      </span>
      <div>
        <strong>{title}</strong>
        <p>{detail}</p>
      </div>
      <time>{time}</time>
    </div>
  )
}

const rules = Array.from({ length: 22 }, (_, index) => {
  const modules = ["Inventory", "Sales", "Finance", "Procurement"]
  const names = [
    "Validasi stok minimum",
    "Persetujuan diskon bertingkat",
    "Pemeriksaan batas kredit",
    "Rotasi batch FEFO",
    "Otorisasi penyesuaian stok",
    "Blokir faktur jatuh tempo",
  ]
  return {
    id: `SR-${String(index + 1).padStart(2, "0")}`,
    name: names[index % names.length],
    module: modules[index % modules.length],
    scope:
      index % 3 === 0
        ? "Seluruh perusahaan"
        : index % 3 === 1
          ? "Cabang"
          : "Gudang",
    status: index === 7 || index === 16 ? "Draft" : "Aktif",
    updated: `${10 + (index % 15)} Jan 2025`,
  }
})

function Admin({
  onEditRule,
}: {
  onEditRule: (rule: typeof rules[number]) => void
}) {
  const [tab, setTab] = useState("Business Rules")
  return (
    <>
      <PageHeader
        eyebrow="Master Admin"
        title="Pengaturan & kontrol akses"
        description="Kelola pengguna, role, permission, dan aturan operasional perusahaan."
        actions={
          <Button variant="primary" icon="plus">
            Tambah pengguna
          </Button>
        }
      />
      <div className="tabs">
        {["Users", "Roles & Permissions", "Business Rules", "Organization"].map(
          (item) => (
            <button
              key={item}
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
            >
              {item}
              {item === "Business Rules" && <span>22</span>}
            </button>
          ),
        )}
      </div>
      {tab === "Business Rules" ? (
        <article className="panel table-panel">
          <div className="table-toolbar">
            <div>
              <h2>Aturan bisnis operasional</h2>
              <p>22 aturan aktif yang mengendalikan proses lintas modul.</p>
            </div>
            <div className="toolbar-actions">
              <div className="search-field">
                <Icon name="search" size={16} />
                <input placeholder="Cari aturan..." />
              </div>
              <Button icon="filter">Filter</Button>
              <Button variant="primary" icon="plus">
                Buat aturan
              </Button>
            </div>
          </div>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>RULE ID</th>
                  <th>NAMA ATURAN</th>
                  <th>MODUL</th>
                  <th>CAKUPAN</th>
                  <th>STATUS</th>
                  <th>DIPERBARUI</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rules.slice(0, 9).map((rule) => (
                  <tr key={rule.id} onClick={() => onEditRule(rule)}>
                    <td onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <b className="id-text">{rule.id}</b>
                    </td>
                    <td>
                      <strong>{rule.name}</strong>
                    </td>
                    <td>{rule.module}</td>
                    <td>{rule.scope}</td>
                    <td>
                      <Badge
                        tone={rule.status === "Aktif" ? "success" : "neutral"}
                        dot
                      >
                        {rule.status}
                      </Badge>
                    </td>
                    <td>
                      {rule.updated}
                      <small>oleh Admin Sistem</small>
                    </td>
                    <td>
                      <button className="icon-button">
                        <Icon name="more" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination total="22 aturan" />
        </article>
      ) : tab === "Users" ? (
        <UsersTable />
      ) : (
        <RoleMatrix />
      )}
    </>
  )
}

function UsersTable() {
  const names = [
    "Rani Kusumadewi",
    "Dimas Wardana",
    "Maya Prasetyo",
    "Arif Setiawan",
    "Nadia Permata",
  ]
  return (
    <article className="panel table-panel">
      <div className="table-toolbar">
        <div>
          <h2>Daftar pengguna</h2>
          <p>184 akun dari 8 cabang terdaftar.</p>
        </div>
        <div className="search-field">
          <Icon name="search" size={16} />
          <input placeholder="Cari nama atau email..." />
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>NAMA</th>
            <th>ROLE</th>
            <th>CABANG</th>
            <th>LAST LOGIN</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, i) => (
            <tr key={name}>
              <td>
                <div className="user-cell">
                  <span className="avatar small">
                    {name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>
                      {name.toLowerCase().replace(" ", ".")}@arunika.co.id
                    </small>
                  </span>
                </div>
              </td>
              <td>
                {
                  [
                    "Super Admin",
                    "Warehouse Manager",
                    "Finance Analyst",
                    "Sales Manager",
                    "Auditor",
                  ][i]
                }
              </td>
              <td>
                {
                  [
                    "Head Office",
                    "Jakarta Timur",
                    "Surabaya",
                    "Bandung",
                    "Head Office",
                  ][i]
                }
              </td>
              <td>{i + 1} jam lalu</td>
              <td>
                <Badge tone="success" dot>
                  Aktif
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}

function RoleMatrix() {
  const permissions = [
    "Melihat data",
    "Membuat data",
    "Mengubah data",
    "Menghapus data",
    "Menyetujui",
    "Ekspor",
  ]
  return (
    <div className="role-layout">
      <article className="panel role-list">
        <h2>Role</h2>
        {[
          "Super Admin",
          "Warehouse Manager",
          "Finance Analyst",
          "Sales Manager",
          "Auditor",
        ].map((r, i) => (
          <button className={i === 1 ? "active" : ""} key={r}>
            <span>
              <strong>{r}</strong>
              <small>{[4, 18, 8, 24, 3][i]} anggota</small>
            </span>
            <Icon name="chevron" size={15} />
          </button>
        ))}
      </article>
      <article className="panel permission-panel">
        <div className="panel-head">
          <div>
            <h2>Warehouse Manager</h2>
            <p>Akses operasional gudang dan persediaan</p>
          </div>
          <Button variant="primary">Simpan perubahan</Button>
        </div>
        <table className="permission-table">
          <thead>
            <tr>
              <th>MODUL</th>
              {permissions.map((p) => (
                <th key={p}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "Dashboard",
              "Inventory",
              "Sales Order",
              "Finance",
              "Master Data",
            ].map((mod, i) => (
              <tr key={mod}>
                <td>
                  <strong>{mod}</strong>
                </td>
                {permissions.map((p, j) => (
                  <td key={p}>
                    <input type="checkbox" defaultChecked={i < 2 || j < 2} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  )
}

const auditRows = [
  {
    time: "23 Jan 2025 · 14:32:08",
    user: "Rani Kusumadewi",
    role: "Super Admin",
    module: "Business Rules",
    action: "Update",
    entity: "SR-03",
    source: "10.24.8.12",
  },
  {
    time: "23 Jan 2025 · 14:28:41",
    user: "Dimas Wardana",
    role: "Warehouse Manager",
    module: "Inventory",
    action: "Update",
    entity: "ADJ-2025-0184",
    source: "10.24.12.4",
  },
  {
    time: "23 Jan 2025 · 14:16:12",
    user: "Maya Prasetyo",
    role: "Finance Analyst",
    module: "Customer Credit",
    action: "Update",
    entity: "CUST-00842",
    source: "10.24.5.28",
  },
  {
    time: "23 Jan 2025 · 13:58:03",
    user: "System Integration",
    role: "Service Account",
    module: "Sales Order",
    action: "Create",
    entity: "SO-2501-0842",
    source: "172.18.0.5",
  },
  {
    time: "23 Jan 2025 · 13:42:55",
    user: "Arif Setiawan",
    role: "Sales Manager",
    module: "Invoice",
    action: "Delete",
    entity: "INV-DRAFT-221",
    source: "10.24.6.17",
  },
  {
    time: "23 Jan 2025 · 13:30:17",
    user: "Nadia Permata",
    role: "Auditor",
    module: "Audit Log",
    action: "Export",
    entity: "EXPORT-049",
    source: "10.24.8.32",
  },
]

function Audit({
  onSelect,
}: {
  onSelect: (row: typeof auditRows[number]) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="System Trail"
        title="Audit log"
        description="Rekam jejak aktivitas sistem yang immutable dan dapat ditelusuri."
        actions={<Button icon="download">Ekspor log</Button>}
      />
      <div className="summary-row">
        <MiniStat
          label="Aktivitas hari ini"
          value="2.842"
          note="+18,4% dari kemarin"
        />
        <MiniStat
          label="Perubahan data"
          value="684"
          note="24,1% dari aktivitas"
        />
        <MiniStat
          label="Aksi berisiko"
          value="7"
          note="Memerlukan review"
          danger
        />
        <MiniStat
          label="Retensi data"
          value="7 tahun"
          note="Sesuai kebijakan"
        />
      </div>
      <article className="panel table-panel">
        <div className="table-toolbar filters">
          <div className="search-field wide">
            <Icon name="search" size={16} />
            <input placeholder="Cari Event ID, pengguna, atau entity..." />
          </div>
          <div className="toolbar-actions">
            <div className="field compact">
              <Icon name="calendar" size={15} />
              <span>Hari ini</span>
            </div>
            <div className="field compact">
              <span>Semua modul</span>
              <Icon name="chevron" size={14} />
            </div>
            <div className="field compact">
              <span>Semua aksi</span>
              <Icon name="chevron" size={14} />
            </div>
            <Button icon="filter">Filter</Button>
          </div>
        </div>
        <div className="table-scroll">
          <table className="data-table audit-table">
            <thead>
              <tr>
                <th>TIMESTAMP</th>
                <th>USER / ROLE</th>
                <th>MODUL</th>
                <th>AKSI</th>
                <th>ENTITY</th>
                <th>SOURCE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {auditRows.map((row, i) => (
                <tr key={i} onClick={() => onSelect(row)}>
                  <td>
                    <strong>{row.time.split(" · ")[0]}</strong>
                    <small>{row.time.split(" · ")[1]} WIB</small>
                  </td>
                  <td>
                    <strong>{row.user}</strong>
                    <small>{row.role}</small>
                  </td>
                  <td>{row.module}</td>
                  <td>
                    <Badge
                      tone={
                        row.action === "Delete"
                          ? "danger"
                          : row.action === "Create"
                            ? "success"
                            : row.action === "Export"
                              ? "neutral"
                              : "info"
                      }
                      dot
                    >
                      {row.action}
                    </Badge>
                  </td>
                  <td>
                    <b className="id-text">{row.entity}</b>
                  </td>
                  <td className="mono">{row.source}</td>
                  <td>
                    <Icon name="chevron" size={16} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total="2.842 aktivitas" />
      </article>
    </>
  )
}

function MiniStat({
  label,
  value,
  note,
  danger = false,
}: {
  label: string
  value: string
  note: string
  danger?: boolean
}) {
  return (
    <article className="mini-stat">
      <span>{label}</span>
      <strong className={danger ? "danger-text" : ""}>{value}</strong>
      <small>{note}</small>
    </article>
  )
}

const stockRows = [
  {
    sku: "BVG-00182",
    name: "Arunika Mineral 600ml",
    batch: "AM25A-018",
    wh: "Jakarta Timur",
    system: 12480,
    counted: 12480,
    variance: 0,
    status: "Terverifikasi",
  },
  {
    sku: "FOD-00418",
    name: "Nusa Biskuit Cokelat 120g",
    batch: "NB24L-092",
    wh: "Jakarta Timur",
    system: 8640,
    counted: 8612,
    variance: -28,
    status: "Perlu Review",
  },
  {
    sku: "HHC-00294",
    name: "Bersih Dishwash Lime 750ml",
    batch: "BD25A-041",
    wh: "Bekasi",
    system: 4920,
    counted: 4936,
    variance: 16,
    status: "Perlu Review",
  },
  {
    sku: "PCS-00176",
    name: "Lembut Shampoo 180ml",
    batch: "LS24K-214",
    wh: "Surabaya",
    system: 3210,
    counted: 3210,
    variance: 0,
    status: "Terverifikasi",
  },
  {
    sku: "FOD-00612",
    name: "Rasa Mie Goreng 85g",
    batch: "RM25A-127",
    wh: "Bandung",
    system: 18600,
    counted: 18600,
    variance: 0,
    status: "Terverifikasi",
  },
  {
    sku: "BVG-00304",
    name: "Segar Teh Melati 350ml",
    batch: "ST24L-089",
    wh: "Semarang",
    system: 7840,
    counted: 7801,
    variance: -39,
    status: "Ditolak",
  },
]

function Inventory() {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <PageHeader
        eyebrow="Inventory"
        title="Opening stock"
        description="Verifikasi dan sesuaikan baseline persediaan seluruh gudang."
        actions={
          <>
            <Button icon="download">Impor template</Button>
            <Button variant="primary" icon="plus">
              Buat penyesuaian
            </Button>
          </>
        }
      />
      <div className="process-steps">
        {["Draft", "Submitted", "Under Review", "Verified", "Posted"].map(
          (s, i) => (
            <div key={s} className={i <= 2 ? "done" : ""}>
              <span>{i < 2 ? <Icon name="check" size={13} /> : i + 1}</span>
              <b>{s}</b>
              {i < 4 && <i />}
            </div>
          ),
        )}
      </div>
      <div className="summary-row inventory-summary">
        <MiniStat label="Total SKU" value="4.286" note="12 gudang" />
        <MiniStat
          label="Sudah diverifikasi"
          value="3.942"
          note="92,0% selesai"
        />
        <MiniStat
          label="Selisih ditemukan"
          value="184"
          note="Nilai Rp 42,8 Jt"
          danger
        />
        <MiniStat
          label="Menunggu review"
          value="160"
          note="Prioritas operasional"
        />
      </div>
      <article className="panel table-panel">
        {selected > 0 ? (
          <div className="bulk-bar">
            <strong>{selected} baris dipilih</strong>
            <button onClick={() => setSelected(0)}>Batalkan</button>
            <span />
            <Button>Verifikasi</Button>
            <Button icon="download">Ekspor</Button>
          </div>
        ) : (
          <div className="table-toolbar filters">
            <div className="search-field wide">
              <Icon name="search" size={16} />
              <input placeholder="Cari SKU, produk, atau batch..." />
            </div>
            <div className="toolbar-actions">
              <div className="field compact">
                <span>Semua gudang</span>
                <Icon name="chevron" size={14} />
              </div>
              <div className="field compact">
                <span>Semua status</span>
                <Icon name="chevron" size={14} />
              </div>
              <Button icon="filter">Filter</Button>
            </div>
          </div>
        )}
        <div className="table-scroll">
          <table className="data-table stock-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelected(e.target.checked ? stockRows.length : 0)
                    }
                  />
                </th>
                <th>SKU / PRODUK</th>
                <th>BATCH</th>
                <th>GUDANG</th>
                <th className="num">SYSTEM QTY</th>
                <th className="num">COUNTED</th>
                <th className="num">VARIANCE</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {stockRows.map((row, i) => (
                <tr key={row.sku} className={i < selected ? "selected" : ""}>
                  <td>
                    <input
                      type="checkbox"
                      checked={i < selected}
                      onChange={(e) =>
                        setSelected((v) =>
                          e.target.checked ? v + 1 : Math.max(0, v - 1),
                        )
                      }
                    />
                  </td>
                  <td>
                    <strong>{row.name}</strong>
                    <small className="id-text">{row.sku}</small>
                  </td>
                  <td className="mono">{row.batch}</td>
                  <td>{row.wh}</td>
                  <td className="num">{row.system.toLocaleString("id-ID")}</td>
                  <td className="num">{row.counted.toLocaleString("id-ID")}</td>
                  <td className={`num ${row.variance ? "variance" : ""}`}>
                    {row.variance > 0 ? "+" : ""}
                    {row.variance}
                  </td>
                  <td>
                    <Badge
                      tone={
                        row.status === "Terverifikasi"
                          ? "success"
                          : row.status === "Ditolak"
                            ? "danger"
                            : "warning"
                      }
                      dot
                    >
                      {row.status}
                    </Badge>
                  </td>
                  <td>
                    <button className="icon-button">
                      <Icon name="more" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total="4.286 SKU" />
      </article>
    </>
  )
}

function Finance() {
  const [tab, setTab] = useState("Sales Orders")
  return (
    <>
      <PageHeader
        eyebrow="Finance & Sales"
        title="Order & customer credit"
        description="Kelola pesanan, faktur, dan eksposur kredit pelanggan."
        actions={
          <Button variant="primary" icon="plus">
            Sales order baru
          </Button>
        }
      />
      <div className="tabs">
        {["Sales Orders", "Invoices", "Customer Credit", "Collections"].map(
          (t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ),
        )}
      </div>
      <div className="finance-layout">
        <article className="panel order-form">
          <div className="panel-head">
            <div>
              <span className="eyebrow">DRAFT ORDER</span>
              <h2>SO-2501-0843</h2>
            </div>
            <Badge tone="neutral">Draft</Badge>
          </div>
          <div className="form-grid">
            <label>
              <span>Pelanggan</span>
              <div className="field">
                <strong>PT Sinar Mart Indonesia</strong>
                <Icon name="chevron" size={15} />
              </div>
            </label>
            <label>
              <span>Cabang</span>
              <div className="field">
                Jakarta Timur
                <Icon name="chevron" size={15} />
              </div>
            </label>
            <label>
              <span>Tanggal pesanan</span>
              <div className="field">
                23 Jan 2025
                <Icon name="calendar" size={15} />
              </div>
            </label>
            <label>
              <span>Termin pembayaran</span>
              <div className="field">
                Net 30 hari
                <Icon name="chevron" size={15} />
              </div>
            </label>
          </div>
          <div className="section-title">
            <h3>Item pesanan</h3>
            <Button icon="plus">Tambah item</Button>
          </div>
          <table className="line-table">
            <thead>
              <tr>
                <th>PRODUK</th>
                <th className="num">QTY</th>
                <th className="num">HARGA</th>
                <th className="num">DISKON</th>
                <th className="num">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Arunika Mineral 600ml</strong>
                  <small>BVG-00182 · Stok 12.480</small>
                </td>
                <td className="num">240</td>
                <td className="num">3.250</td>
                <td className="num">5%</td>
                <td className="num">
                  <strong>741.000</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Nusa Biskuit Cokelat 120g</strong>
                  <small>FOD-00418 · Stok 8.640</small>
                </td>
                <td className="num">120</td>
                <td className="num">8.500</td>
                <td className="num">3%</td>
                <td className="num">
                  <strong>989.400</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Rasa Mie Goreng 85g</strong>
                  <small>FOD-00612 · Stok 18.600</small>
                </td>
                <td className="num">360</td>
                <td className="num">2.850</td>
                <td className="num">4%</td>
                <td className="num">
                  <strong>984.960</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="add-line">
            <Icon name="plus" size={15} /> Tambah baris produk
          </button>
        </article>
        <aside className="finance-side">
          <article className="panel credit-card">
            <div className="panel-head">
              <div>
                <h2>Validasi kredit</h2>
                <p>PT Sinar Mart Indonesia</p>
              </div>
              <span className="status-icon success">
                <Icon name="check" />
              </span>
            </div>
            <div className="credit-chart">
              <div className="credit-ring">
                <span>62%</span>
              </div>
              <div>
                <small>Terpakai</small>
                <strong>Rp 310 Jt</strong>
                <p>dari limit Rp 500 Jt</p>
              </div>
            </div>
            <div className="credit-row">
              <span>Tersedia setelah order</span>
              <strong>Rp 187,2 Jt</strong>
            </div>
            <div className="credit-row">
              <span>Piutang jatuh tempo</span>
              <strong>Rp 0</strong>
            </div>
            <div className="success-note">
              <Icon name="check" size={16} />
              <span>
                <b>Validasi berhasil</b>Order berada dalam batas kredit
                pelanggan.
              </span>
            </div>
          </article>
          <article className="panel total-card">
            <h2>Ringkasan order</h2>
            <div>
              <span>Subtotal</span>
              <b>{currency(2715360)}</b>
            </div>
            <div>
              <span>PPN 11%</span>
              <b>{currency(298690)}</b>
            </div>
            <div>
              <span>Pengiriman</span>
              <b>{currency(75000)}</b>
            </div>
            <div className="grand-total">
              <span>Total</span>
              <strong>{currency(3089050)}</strong>
            </div>
            <Button variant="primary">Ajukan pesanan</Button>
            <Button>Simpan draft</Button>
          </article>
        </aside>
      </div>
    </>
  )
}

const tests = Array.from({ length: 36 }, (_, i) => {
  const statuses = [
    "Passed",
    "Passed",
    "Passed",
    "Failed",
    "Blocked",
    "Not Run",
  ]
  return {
    id: `T-${String(i + 1).padStart(2, "0")}`,
    scenario: [
      "Sales Order → Inventory Reservation",
      "Delivery → Stock Movement",
      "Invoice → General Ledger",
      "Customer Credit Validation",
      "Marketplace Order Sync",
      "Batch & Expiry Allocation",
    ][i % 6],
    source: [
      "Sales",
      "Warehouse",
      "Finance",
      "Credit",
      "Integration",
      "Inventory",
    ][i % 6],
    target: [
      "Inventory",
      "Inventory",
      "Accounting",
      "Sales",
      "Sales",
      "Warehouse",
    ][i % 6],
    owner: ["QA Core", "Warehouse QA", "Finance QA"][i % 3],
    status: statuses[i % 6],
    duration: i % 6 === 5 ? "—" : `${1 + (i % 4)}m ${12 + i}s`,
  }
})

function Testing() {
  return (
    <>
      <PageHeader
        eyebrow="Quality Assurance"
        title="Integration testing monitor"
        description="Pantau progres dan hasil 36 skenario pengujian lintas modul."
        actions={
          <>
            <Button icon="download">Laporan</Button>
            <Button variant="primary" icon="activity">
              Jalankan ulang failed
            </Button>
          </>
        }
      />
      <div className="test-overview">
        <article className="panel progress-card">
          <div className="progress-ring">
            <span>
              <strong>78%</strong>
              <small>Pass rate</small>
            </span>
          </div>
          <div>
            <span className="eyebrow">RUN #IT-2025-014</span>
            <h2>28 dari 36 skenario berhasil</h2>
            <p>Terakhir dijalankan 23 Jan 2025, 13:45 WIB</p>
            <div className="progress-line">
              <i />
            </div>
          </div>
        </article>
        <div className="test-stats">
          <MiniStat label="Passed" value="28" note="78% skenario" />
          <MiniStat label="Failed" value="3" note="Perlu investigasi" danger />
          <MiniStat label="Blocked" value="2" note="Menunggu dependency" />
          <MiniStat label="Not Run" value="3" note="Belum dijalankan" />
        </div>
      </div>
      <article className="panel table-panel">
        <div className="table-toolbar filters">
          <div className="search-field wide">
            <Icon name="search" size={16} />
            <input placeholder="Cari Test ID atau skenario..." />
          </div>
          <div className="toolbar-actions">
            <div className="field compact">
              <span>Semua status</span>
              <Icon name="chevron" size={14} />
            </div>
            <div className="field compact">
              <span>Semua modul</span>
              <Icon name="chevron" size={14} />
            </div>
            <Button icon="filter">Filter</Button>
          </div>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>TEST ID</th>
                <th>SKENARIO</th>
                <th>ALUR INTEGRASI</th>
                <th>OWNER</th>
                <th>DURASI</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tests.slice(0, 8).map((test) => (
                <tr key={test.id}>
                  <td>
                    <b className="id-text">{test.id}</b>
                  </td>
                  <td>
                    <strong>{test.scenario}</strong>
                  </td>
                  <td>
                    <span className="integration-flow">
                      {test.source}
                      <Icon name="chevron" size={13} />
                      {test.target}
                    </span>
                  </td>
                  <td>{test.owner}</td>
                  <td className="mono">{test.duration}</td>
                  <td>
                    <Badge
                      tone={
                        test.status === "Passed"
                          ? "success"
                          : test.status === "Failed"
                            ? "danger"
                            : test.status === "Blocked"
                              ? "warning"
                              : "neutral"
                      }
                      dot
                    >
                      {test.status}
                    </Badge>
                  </td>
                  <td>
                    <button className="icon-button">
                      <Icon name="more" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total="36 skenario" />
      </article>
    </>
  )
}

function Pagination({ total }: { total: string }) {
  return (
    <div className="pagination">
      <span>Menampilkan 1–10 dari {total}</span>
      <div>
        <button disabled>‹</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>›</button>
      </div>
    </div>
  )
}

function RuleModal({
  rule,
  onClose,
}: {
  rule: typeof rules[number]
  onClose: () => void
}) {
  const [reason, setReason] = useState("")
  const [saved, setSaved] = useState(false)
  if (saved)
    return (
      <div className="overlay">
        <div className="modal success-modal">
          <span className="large-success">
            <Icon name="check" size={28} />
          </span>
          <h2>Perubahan tersimpan</h2>
          <p>{rule.id} telah diperbarui dan direkam pada audit log.</p>
          <Button variant="primary" onClick={onClose}>
            Selesai
          </Button>
        </div>
      </div>
    )
  return (
    <div className="overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span className="warning-icon">
              <Icon name="warning" />
            </span>
            <div>
              <h2>Konfirmasi perubahan aturan</h2>
              <p>Perubahan akan memengaruhi proses operasional aktif.</p>
            </div>
          </div>
          <button onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="change-summary">
          <span>ATURAN</span>
          <strong>
            {rule.id} · {rule.name}
          </strong>
          <div>
            <small>Prioritas sebelumnya</small>
            <Icon name="chevron" size={14} />
            <small>Prioritas baru</small>
          </div>
          <div>
            <b>3 — Normal</b>
            <Icon name="chevron" size={14} />
            <b className="purple-text">2 — Tinggi</b>
          </div>
        </div>
        <label className="reason-field">
          <span>
            Alasan perubahan <b>*</b>
          </span>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Jelaskan alasan dan dampak perubahan ini..."
          />
          <small>{reason.length}/250 karakter</small>
        </label>
        <div className="modal-warning">
          <Icon name="warning" size={17} />
          <span>
            Setelah disimpan, perubahan akan langsung berlaku dan tidak dapat
            dibatalkan tanpa perubahan aturan baru.
          </span>
        </div>
        <div className="modal-actions">
          <Button onClick={onClose}>Batal</Button>
          <Button
            variant="primary"
            disabled={reason.trim().length < 8}
            onClick={() => setSaved(true)}
          >
            Konfirmasi perubahan
          </Button>
        </div>
      </div>
    </div>
  )
}

function AuditDrawer({
  row,
  onClose,
}: {
  row: typeof auditRows[number]
  onClose: () => void
}) {
  return (
    <div className="drawer-overlay" onMouseDown={onClose}>
      <aside className="drawer" onMouseDown={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <span className="eyebrow">AUDIT EVENT</span>
            <h2>EVT-20250123-8F2A</h2>
          </div>
          <button onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="drawer-content">
          <Badge tone="info" dot>
            {row.action}
          </Badge>
          <h3>
            {row.module} · {row.entity}
          </h3>
          <p className="drawer-intro">
            Perubahan data dilakukan melalui antarmuka web dan telah tervalidasi
            oleh sistem.
          </p>
          <div className="meta-grid">
            <div>
              <span>Timestamp</span>
              <strong>{row.time} WIB</strong>
            </div>
            <div>
              <span>User / Role</span>
              <strong>{row.user}</strong>
              <small>{row.role}</small>
            </div>
            <div>
              <span>Source IP</span>
              <strong className="mono">{row.source}</strong>
            </div>
            <div>
              <span>Correlation ID</span>
              <strong className="mono">cor_8f2a9c14</strong>
            </div>
          </div>
          <div className="diff-head">
            <h3>Perubahan field</h3>
            <div className="segmented">
              <button className="active">Field changes</button>
              <button>Raw data</button>
            </div>
          </div>
          <div className="diff-card">
            <div className="diff-label">
              <span>FIELD</span>
              <b>credit_limit</b>
            </div>
            <div className="before">
              <span>NILAI SEBELUM</span>
              <code>250000000</code>
            </div>
            <Icon name="chevron" />
            <div className="after">
              <span>NILAI SESUDAH</span>
              <code>500000000</code>
            </div>
          </div>
          <div className="diff-card">
            <div className="diff-label">
              <span>FIELD</span>
              <b>approval_status</b>
            </div>
            <div className="before">
              <span>NILAI SEBELUM</span>
              <code>"pending"</code>
            </div>
            <Icon name="chevron" />
            <div className="after">
              <span>NILAI SESUDAH</span>
              <code>"approved"</code>
            </div>
          </div>
        </div>
        <div className="drawer-footer">
          <Button icon="download">Ekspor detail</Button>
          <Button variant="primary" icon="external">
            Buka entity
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("dashboard")
  const [collapsed, setCollapsed] = useState(false)
  const [ruleModal, setRuleModal] = useState<typeof rules[number] | null>(null)
  const [auditDrawer, setAuditDrawer] =
    useState<typeof auditRows[number] | null>(null)
  const activeNav = useMemo(
    () => navItems.find((item) => item.id === page)!,
    [page],
  )

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark">A</div>
        <div className="brand-copy">
          <strong>ARUNIKA</strong>
          <span>Distribusi Cepat</span>
        </div>
        <div className="top-divider" />
        <div className="module-context">{activeNav.label}</div>
        <div className="global-search">
          <Icon name="search" size={16} />
          <input placeholder="Cari menu, data, atau dokumen..." />
          <kbd>⌘ K</kbd>
        </div>
        <button className="top-icon">
          <Icon name="bell" />
          <span>4</span>
        </button>
        <button className="top-icon">
          <Icon name="clock" />
        </button>
        <div className="top-divider" />
        <button className="profile">
          <span className="avatar">RK</span>
          <span>
            <strong>Rani Kusumadewi</strong>
            <small>Super Admin</small>
          </span>
          <Icon name="chevron" size={14} />
        </button>
      </header>
      <div className="app-body">
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="sidebar-top">
            <span className="workspace-icon">
              <Icon name={activeNav.icon} size={20} />
            </span>
            {!collapsed && (
              <span>
                <small>WORKSPACE</small>
                <strong>Enterprise ERP</strong>
              </span>
            )}
            <button
              onClick={() => setCollapsed((v) => !v)}
              aria-label="Toggle sidebar"
            >
              <Icon name={collapsed ? "chevron" : "menu"} size={18} />
            </button>
          </div>
          <nav>
            <small className="nav-label">
              {collapsed ? "•••" : "MAIN MENU"}
            </small>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={page === item.id ? "active" : ""}
                onClick={() => setPage(item.id)}
                title={collapsed ? item.label : undefined}
              >
                <Icon name={item.icon} size={19} />
                {!collapsed && (
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.short}</small>
                  </span>
                )}
                {!collapsed && page === item.id && (
                  <Icon name="chevron" size={14} />
                )}
              </button>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <button>
              <Icon name="settings" size={19} />
              {!collapsed && <span>Pengaturan</span>}
            </button>
            <button>
              <Icon name="logout" size={19} />
              {!collapsed && <span>Keluar</span>}
            </button>
            {!collapsed && (
              <div className="system-status">
                <i />
                <span>
                  <strong>Semua sistem normal</strong>
                  <small>v17.0.4 · Production</small>
                </span>
              </div>
            )}
          </div>
        </aside>
        <main className="page-content">
          {page === "dashboard" && <Dashboard />}
          {page === "admin" && <Admin onEditRule={setRuleModal} />}
          {page === "audit" && <Audit onSelect={setAuditDrawer} />}
          {page === "inventory" && <Inventory />}
          {page === "finance" && <Finance />}
          {page === "testing" && <Testing />}
        </main>
      </div>
      {ruleModal && (
        <RuleModal rule={ruleModal} onClose={() => setRuleModal(null)} />
      )}
      {auditDrawer && (
        <AuditDrawer row={auditDrawer} onClose={() => setAuditDrawer(null)} />
      )}
    </div>
  )
}
