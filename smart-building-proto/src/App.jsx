import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  ChartSpline,
  CheckCircle2,
  CircleDollarSign,
  CloudSun,
  CreditCard,
  Flame,
  Landmark,
  MessageSquareWarning,
  ParkingCircle,
  QrCode,
  ReceiptText,
  ShieldCheck,
  UserRound,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react'

const { div: MotionDiv, section: MotionSection, button: MotionButton } = motion

const buildingSlides = [
  {
    name: '云栖智谷 A座',
    area: '12,800㎡',
    level: '甲级办公',
    occupancy: 92,
    energy: 86,
    gradient: 'from-blue-600/40 via-cyan-500/15 to-indigo-600/30',
  },
  {
    name: '天府数智中心 B塔',
    area: '18,500㎡',
    level: '总部独栋',
    occupancy: 88,
    energy: 81,
    gradient: 'from-indigo-500/45 via-blue-500/10 to-sky-500/25',
  },
  {
    name: '科创金融港 C区',
    area: '22,300㎡',
    level: '商务综合体',
    occupancy: 95,
    energy: 90,
    gradient: 'from-cyan-500/35 via-blue-500/10 to-violet-500/30',
  },
]

const leasingList = [
  {
    id: 'L-1001',
    title: '金融中轴·云璟国际',
    status: '招商中',
    area: '1,280㎡',
    floorHeight: '4.2m',
    rent: '¥168/㎡·月',
    estimate: '预计年招商额 ¥2,580万',
  },
  {
    id: 'L-1002',
    title: '滨江智造·科链大厦',
    status: '稀缺席位',
    area: '860㎡',
    floorHeight: '4.0m',
    rent: '¥142/㎡·月',
    estimate: '预计年招商额 ¥1,460万',
  },
  {
    id: 'L-1003',
    title: 'AI总部港·星云中心',
    status: '已满租',
    area: '0㎡',
    floorHeight: '4.5m',
    rent: '¥188/㎡·月',
    estimate: '当前签约额 ¥3,980万',
  },
]

const enterprises = [
  { name: '星河云算科技', brief: '全国领先算力调度平台，服务金融与制造客户。' },
  { name: '辰峰生物医疗', brief: 'AI辅助诊断与高端医疗器械研发企业。' },
  { name: '中新智联能源', brief: '新能源运维平台，覆盖工商业储能管理。' },
  { name: '元核半导体', brief: '功率器件与车规芯片设计企业。' },
  { name: '天际机器人', brief: '工业协作机器人与智能巡检系统提供商。' },
  { name: '蓝舟数字安全', brief: '零信任安全架构与数据合规解决方案。' },
]

const announcements = [
  '园区能源系统将于今晚23:00进行例行巡检。',
  '本周五 14:00 举办产业资本闭门路演会。',
  '4月企业服务政策申报窗口已开放。',
]

const navItems = [
  { key: 'home', label: '首页', icon: Landmark },
  { key: 'leasing', label: '招商', icon: CircleDollarSign },
  { key: 'enterprise', label: '企业', icon: Building2 },
  { key: 'property', label: '物业', icon: ShieldCheck },
  { key: 'wallet', label: '一卡通', icon: Wallet },
  { key: 'profile', label: '我的', icon: UserRound },
]

const cardClass = 'rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl shadow-glass'

function StatusTag({ status }) {
  const styles = useMemo(() => {
    if (status === '招商中') return 'bg-blue-500/20 text-blue-300 border-blue-400/40'
    if (status === '稀缺席位') return 'bg-amber-400/20 text-amber-200 border-amber-300/40'
    return 'bg-emerald-500/20 text-emerald-200 border-emerald-300/40'
  }, [status])

  return <span className={`rounded-full border px-2.5 py-1 text-[10px] ${styles}`}>{status}</span>
}

function HomePage({ slideIndex, role }) {
  const currentSlide = buildingSlides[slideIndex]

  return (
    <div className="space-y-3.5">
      <MotionSection
        key={currentSlide.name}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`${cardClass} overflow-hidden p-3.5`}
      >
        <div className={`relative h-44 rounded-xl bg-gradient-to-br ${currentSlide.gradient} p-3`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.2),transparent_35%)]" />
          <div className="absolute bottom-4 left-4 right-4 h-20 rounded-lg border border-blue-200/20 bg-slate-900/35 backdrop-blur-sm">
            <div className="grid h-full grid-cols-3 gap-2 px-3 py-2 text-[10px] text-blue-100/90">
              <div className="space-y-1">
                <p className="text-blue-200/70">楼宇体量</p>
                <p className="text-sm font-semibold">{currentSlide.area}</p>
              </div>
              <div className="space-y-1">
                <p className="text-blue-200/70">物业等级</p>
                <p className="text-sm font-semibold">{currentSlide.level}</p>
              </div>
              <div className="space-y-1">
                <p className="text-blue-200/70">入驻率</p>
                <p className="text-sm font-semibold">{currentSlide.occupancy}%</p>
              </div>
            </div>
          </div>
          <div className="absolute left-3 top-3 rounded-full border border-blue-200/30 bg-slate-900/35 px-2 py-1 text-[10px] text-blue-100">
            3D楼宇全景
          </div>
          <div className="absolute right-3 top-3 rounded-full border border-cyan-200/30 bg-slate-900/35 px-2 py-1 text-[10px] text-cyan-100">
            {currentSlide.name}
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-1.5">
          {buildingSlides.map((_, idx) => (
            <div
              key={`dot-${idx}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === slideIndex ? 'w-6 bg-blue-400' : 'w-2 bg-blue-200/40'
              }`}
            />
          ))}
        </div>
      </MotionSection>

      <section className="grid grid-cols-2 gap-3">
        <div className={`${cardClass} p-3`}>
          <div className="mb-2 flex items-center gap-2 text-xs text-blue-100">
            <Zap size={14} className="text-blue-300" />
            能效监控
          </div>
          <p className="text-2xl font-semibold">{currentSlide.energy}</p>
          <p className="text-[11px] text-slate-300">综合能效指数 / 100</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${currentSlide.energy}%` }} />
          </div>
        </div>
        <div className={`${cardClass} p-3`}>
          <div className="mb-2 flex items-center gap-2 text-xs text-blue-100">
            <CloudSun size={14} className="text-cyan-300" />
            园区天气
          </div>
          <p className="text-2xl font-semibold">24°C</p>
          <p className="text-[11px] text-slate-300">晴 · PM2.5 18 · 东南风 2级</p>
          <p className="mt-3 text-[11px] text-emerald-300">适宜商务接待与外场参访</p>
        </div>
      </section>

      <section className={`${cardClass} p-3`}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <ChartSpline size={14} className="text-blue-300" />
            入驻率看板
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-200">稳中向上</span>
        </div>
        <div className="space-y-2">
          {buildingSlides.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between text-[11px]">
                <span className="text-slate-300">{item.name}</span>
                <span className="text-blue-200">{item.occupancy}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
              <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: `${item.occupancy}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {role === 'owner' && (
        <section className={`${cardClass} p-3`}>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xs text-blue-100">整栋楼能耗大屏</h4>
            <span className="rounded-full bg-blue-500/20 px-2 py-1 text-[10px] text-blue-200">业主版</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">当日总用电</p>
              <p className="mt-1 text-blue-200">12,860 kWh</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">峰值负载</p>
              <p className="mt-1 text-blue-200">3.8 MW</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">碳排估算</p>
              <p className="mt-1 text-emerald-300">6.2 吨CO₂</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function LeasingPage() {
  const [calcArea, setCalcArea] = useState('500')
  const rentPerSqm = 156
  const propertyFeePerSqm = 18
  const areaNumber = Number(calcArea) || 0
  const annualRent = areaNumber * rentPerSqm * 12
  const annualPropertyFee = areaNumber * propertyFeePerSqm * 12

  return (
    <div className="relative space-y-3.5 pb-16">
      <section className={`${cardClass} p-3`}>
        <h3 className="text-sm font-semibold text-blue-100">黄金地段 · 招商清单</h3>
        <p className="mt-1 text-[11px] text-slate-300">面向企业总部、科技型中大型租户与投资机构</p>
      </section>
      {leasingList.map((item) => (
        <MotionSection
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${cardClass} p-3`}
        >
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="mt-1 text-[10px] text-slate-400">项目编号 {item.id}</p>
            </div>
            <StatusTag status={item.status} />
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">空置面积</p>
              <p className="mt-1 text-blue-200">{item.area}</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">标准层高</p>
              <p className="mt-1 text-blue-200">{item.floorHeight}</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">租金参考</p>
              <p className="mt-1 text-blue-200">{item.rent}</p>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-emerald-300">{item.estimate}</p>
        </MotionSection>
      ))}
      <section className={`${cardClass} p-3`}>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-blue-100">收益计算器</h4>
          <span className="rounded-full bg-blue-500/15 px-2 py-1 text-[10px] text-blue-200">专业测算</span>
        </div>
        <div className="rounded-xl bg-white/5 p-2.5">
          <label htmlFor="lease-area" className="text-[11px] text-slate-300">
            输入租用面积（㎡）
          </label>
          <input
            id="lease-area"
            type="number"
            min="0"
            value={calcArea}
            onChange={(event) => setCalcArea(event.target.value)}
            className="mt-2 w-full rounded-lg border border-blue-300/30 bg-slate-900/50 px-3 py-2 text-sm text-blue-100 outline-none focus:border-blue-400"
          />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-lg bg-emerald-500/10 p-2.5">
            <p className="text-slate-300">预计年租金</p>
            <p className="mt-1 text-sm font-semibold text-emerald-300">¥{annualRent.toLocaleString()}</p>
          </div>
          <div className="rounded-lg bg-blue-500/10 p-2.5">
            <p className="text-slate-300">预计年物业费</p>
            <p className="mt-1 text-sm font-semibold text-blue-200">¥{annualPropertyFee.toLocaleString()}</p>
          </div>
        </div>
      </section>
      <button className="fixed bottom-24 left-1/2 z-20 flex w-[340px] -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 text-sm font-medium text-white shadow-2xl">
        <ReceiptText size={16} />
        预约看房
      </button>
    </div>
  )
}

function EnterprisePage({ onSelect }) {
  return (
    <div className="space-y-3.5">
      <section className={`${cardClass} p-3`}>
        <h3 className="text-sm font-semibold text-blue-100">名企入驻矩阵</h3>
        <p className="mt-1 text-[11px] text-slate-300">点击企业卡片查看业务方向与合作机会</p>
      </section>
      <section className="grid grid-cols-2 gap-3">
        {enterprises.map((item) => (
          <MotionButton
            key={item.name}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(item)}
            className={`${cardClass} p-3 text-left`}
          >
            <div className="mb-3 h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500/60 to-cyan-500/40" />
            <h4 className="text-sm font-medium">{item.name}</h4>
            <p className="mt-1 line-clamp-2 text-[11px] text-slate-300">{item.brief}</p>
          </MotionButton>
        ))}
      </section>
    </div>
  )
}

function PropertyPage() {
  const tiles = [
    { title: '报事报修', desc: '设备、空调、照明一键提单', icon: Wrench },
    { title: '停车缴费', desc: '车牌识别与月卡续费', icon: ParkingCircle },
    { title: '通知公告', desc: '园区通知与政策更新', icon: MessageSquareWarning },
  ]

  return (
    <div className="space-y-3.5">
      <section className={`${cardClass} p-3`}>
        <h3 className="text-sm font-semibold text-blue-100">物业服务中心</h3>
        <p className="mt-1 text-[11px] text-slate-300">高频事务聚合处理，提升租户服务效率</p>
      </section>
      <section className="grid grid-cols-1 gap-3">
        {tiles.map((tile) => (
          <MotionButton key={tile.title} whileTap={{ scale: 0.99 }} className={`${cardClass} flex items-center gap-3 p-3 text-left`}>
            <div className="rounded-xl bg-blue-500/20 p-2">
              <tile.icon size={18} className="text-blue-300" />
            </div>
            <div>
              <h4 className="text-sm font-medium">{tile.title}</h4>
              <p className="text-[11px] text-slate-300">{tile.desc}</p>
            </div>
          </MotionButton>
        ))}
      </section>
      <section className={`${cardClass} p-3`}>
        <h4 className="text-xs text-blue-100">最新公告</h4>
        <ul className="mt-2 space-y-2 text-[11px] text-slate-300">
          {announcements.map((notice) => (
            <li key={notice} className="rounded-lg bg-white/5 px-2.5 py-2">
              {notice}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function WalletPage() {
  const [balance, setBalance] = useState(2860)
  const [points, setPoints] = useState(18640)
  const [todaySpent, setTodaySpent] = useState(168)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return undefined
    const timer = setTimeout(() => setShowSuccess(false), 2200)
    return () => clearTimeout(timer)
  }, [showSuccess])

  const handleRestaurantPay = () => {
    setBalance((prev) => Number((prev - 25).toFixed(2)))
    setPoints((prev) => prev + 25)
    setTodaySpent((prev) => prev + 25)
    setShowSuccess(true)
  }

  return (
    <div className="space-y-3.5">
      <section className="rounded-3xl border border-white/20 bg-gradient-to-br from-blue-600/65 via-indigo-500/60 to-cyan-500/60 p-4 shadow-glass backdrop-blur-xl">
        <div className="flex items-center justify-between text-[11px] text-blue-100">
          <span>智慧楼宇一卡通</span>
          <CreditCard size={15} />
        </div>
        <p className="mt-6 text-2xl font-semibold tracking-wide">**** **** **** 2688</p>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] text-blue-100/75">积分余额</p>
            <p className="text-xl font-semibold">{points.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-[10px] text-blue-100/75">可用余额</p>
            <p className="text-xl font-semibold">¥{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
        </div>
      </section>
      <section className={`${cardClass} p-3`}>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xs text-blue-100">今日消费曲线</h4>
          <span className="text-[10px] text-emerald-300">今日消费 ¥{todaySpent}</span>
        </div>
        <svg viewBox="0 0 320 110" className="h-24 w-full">
          <polyline fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="1" points="0,70 320,70" />
          <polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            points="10,88 54,76 98,80 142,54 186,61 230,38 274,46 310,30"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 text-sm font-medium text-white">
          <QrCode size={16} />
          扫码支付
        </button>
        <button className="flex items-center justify-center gap-2 rounded-xl border border-blue-300/40 bg-blue-500/10 py-3 text-sm font-medium text-blue-200">
          <CircleDollarSign size={16} />
          快速充值
        </button>
      </section>
      <button
        onClick={handleRestaurantPay}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/45 bg-emerald-500/15 py-3 text-sm font-medium text-emerald-200"
      >
        <Flame size={16} />
        模拟餐厅消费 ¥25
      </button>
      <AnimatePresence>
        {showSuccess && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            className="fixed inset-x-8 top-24 z-50 rounded-2xl border border-emerald-300/45 bg-slate-900/95 p-4 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-500/20 p-2">
                <CheckCircle2 size={18} className="text-emerald-300" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-emerald-200">餐厅扣费成功</p>
                <p className="mt-1 text-xs text-slate-300">园区智慧餐厅 · 消费 ¥25.00</p>
                <p className="mt-2 text-xs text-blue-200">积分 +25，当前积分 {points.toLocaleString()}</p>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProfilePage({ role, setRole }) {
  return (
    <div className="space-y-3.5">
      <section className={`${cardClass} p-3`}>
        <h3 className="text-sm font-semibold text-blue-100">个人中心</h3>
        <p className="mt-1 text-[11px] text-slate-300">根据角色展示不同业务看板与操作入口</p>
      </section>
      <section className={`${cardClass} p-3`}>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xs text-blue-100">角色切换</h4>
          <span className="text-[10px] text-blue-300">{role === 'owner' ? '当前：业主版' : '当前：普通租户版'}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setRole('tenant')}
            className={`rounded-xl py-2.5 text-sm ${role === 'tenant' ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-300'}`}
          >
            普通租户版
          </button>
          <button
            onClick={() => setRole('owner')}
            className={`rounded-xl py-2.5 text-sm ${role === 'owner' ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-300'}`}
          >
            业主版
          </button>
        </div>
      </section>
      {role === 'owner' ? (
        <section className={`${cardClass} p-3`}>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xs text-blue-100">整栋楼能耗大屏</h4>
            <ArrowUpRight size={14} className="text-emerald-300" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">总电耗</p>
              <p className="mt-1 text-blue-200">126.8 MWh</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">总水耗</p>
              <p className="mt-1 text-blue-200">5,420 m³</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">碳排强度</p>
              <p className="mt-1 text-emerald-300">0.49 kgCO₂/kWh</p>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-slate-400">节能收益</p>
              <p className="mt-1 text-emerald-300">¥186,000</p>
            </div>
          </div>
        </section>
      ) : (
        <section className={`${cardClass} p-3`}>
          <h4 className="text-xs text-blue-100">租户快捷入口</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded-lg bg-white/5 p-2 text-slate-300">本月租金账单</div>
            <div className="rounded-lg bg-white/5 p-2 text-slate-300">会议室预约</div>
            <div className="rounded-lg bg-white/5 p-2 text-slate-300">访客通行码</div>
            <div className="rounded-lg bg-white/5 p-2 text-slate-300">工单进度</div>
          </div>
        </section>
      )}
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [slideIndex, setSlideIndex] = useState(0)
  const [selectedEnterprise, setSelectedEnterprise] = useState(null)
  const [role, setRole] = useState('tenant')

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % buildingSlides.length)
    }, 3400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mx-auto min-h-screen w-full max-w-[375px] bg-base/90 pb-24 pt-4 text-slate-100">
      <header className="px-4">
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 rounded-2xl border border-white/15 bg-white/8 px-3 py-3 backdrop-blur-xl shadow-glass"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-blue-200">智慧楼宇小程序</p>
              <h1 className="mt-1 text-lg font-semibold">天府数智产城平台</h1>
              <p className="mt-1 text-[10px] text-slate-300">{role === 'owner' ? '业主版视图' : '普通租户版视图'}</p>
            </div>
            <div className="rounded-full bg-blue-500/20 p-2">
              <Landmark size={18} className="text-blue-300" />
            </div>
          </div>
        </MotionDiv>
      </header>

      <main className="px-4">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'home' && <HomePage slideIndex={slideIndex} role={role} />}
            {activeTab === 'leasing' && <LeasingPage />}
            {activeTab === 'enterprise' && <EnterprisePage onSelect={setSelectedEnterprise} />}
            {activeTab === 'property' && <PropertyPage />}
            {activeTab === 'wallet' && <WalletPage />}
            {activeTab === 'profile' && <ProfilePage role={role} setRole={setRole} />}
          </MotionDiv>
        </AnimatePresence>
      </main>

      <nav className="fixed bottom-4 left-1/2 z-30 w-[357px] -translate-x-1/2 rounded-2xl border border-white/15 bg-slate-900/80 px-2 py-2 backdrop-blur-xl shadow-glass">
        <div className="grid grid-cols-6 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.key
            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex flex-col items-center rounded-xl py-2 text-[10px] transition ${
                  isActive ? 'bg-blue-500/25 text-blue-200' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span className="mt-1">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <AnimatePresence>
        {selectedEnterprise && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-end bg-black/45 p-4"
            onClick={() => setSelectedEnterprise(null)}
          >
            <MotionDiv
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              className="w-full rounded-2xl border border-white/20 bg-slate-900/95 p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <h4 className="text-base font-semibold">{selectedEnterprise.name}</h4>
              <p className="mt-2 text-sm text-slate-300">{selectedEnterprise.brief}</p>
              <button
                className="mt-4 w-full rounded-xl bg-blue-500 py-2.5 text-sm text-white"
                onClick={() => setSelectedEnterprise(null)}
              >
                关闭
              </button>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
