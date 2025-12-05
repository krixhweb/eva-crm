
import React from 'react';
import { cn } from '../../lib/utils';
import * as PhosphorIcons from '@phosphor-icons/react';

// Define the map using the namespace to avoid destructuring errors
// and allow for easy checking of existence.
const iconMap: Record<string, React.ElementType> = {
  activity: PhosphorIcons.Pulse,
  alertCircle: PhosphorIcons.WarningCircle,
  alertTriangle: PhosphorIcons.Warning,
  'align-center': PhosphorIcons.TextAlignCenter,
  'align-left': PhosphorIcons.TextAlignLeft,
  'align-right': PhosphorIcons.TextAlignRight,
  analytics: PhosphorIcons.ChartBar,
  archive: PhosphorIcons.Archive,
  arrowDown: PhosphorIcons.ArrowDown,
  arrowLeft: PhosphorIcons.ArrowLeft,
  arrowRight: PhosphorIcons.ArrowRight,
  arrowUp: PhosphorIcons.ArrowUp,
  barChart: PhosphorIcons.ChartBar,
  battery: PhosphorIcons.BatteryFull,
  beaker: PhosphorIcons.Flask,
  bell: PhosphorIcons.Bell,
  bookmark: PhosphorIcons.BookmarkSimple,
  box: PhosphorIcons.Package,
  calendar: PhosphorIcons.CalendarBlank,
  check: PhosphorIcons.Check,
  checkCircle: PhosphorIcons.CheckCircle,
  checkSquare: PhosphorIcons.CheckSquare,
  chevronDown: PhosphorIcons.CaretDown,
  chevronLeft: PhosphorIcons.CaretLeft,
  chevronRight: PhosphorIcons.CaretRight,
  chevronUp: PhosphorIcons.CaretUp,
  clock: PhosphorIcons.Clock,
  close: PhosphorIcons.X,
  code: PhosphorIcons.Code,
  copy: PhosphorIcons.Copy,
  creditCard: PhosphorIcons.CreditCard,
  cursor: PhosphorIcons.Cursor,
  dashboard: PhosphorIcons.SquaresFour,
  dollarSign: PhosphorIcons.CurrencyDollar,
  download: PhosphorIcons.DownloadSimple,
  edit: PhosphorIcons.PencilSimple,
  edit2: PhosphorIcons.Pencil,
  eye: PhosphorIcons.Eye,
  eyeOff: PhosphorIcons.EyeSlash,
  facebook: PhosphorIcons.FacebookLogo,
  // Use fallback if FediverseLogo is missing in the specific version
  fediverse: PhosphorIcons.FediverseLogo || PhosphorIcons.ShareNetwork, 
  fileText: PhosphorIcons.FileText,
  filter: PhosphorIcons.Funnel,
  gift: PhosphorIcons.Gift,
  'git-branch': PhosphorIcons.GitBranch,
  globe: PhosphorIcons.Globe,
  grid: PhosphorIcons.SquaresFour,
  hash: PhosphorIcons.Hash,
  headCircuit: PhosphorIcons.HeadCircuit || PhosphorIcons.Lightning,
  header: PhosphorIcons.TextH,
  heart: PhosphorIcons.Heart,
  helpCircle: PhosphorIcons.Question,
  home: PhosphorIcons.House,
  image: PhosphorIcons.Image,
  info: PhosphorIcons.Info,
  instagram: PhosphorIcons.InstagramLogo,
  kanban: PhosphorIcons.Kanban,
  layout: PhosphorIcons.Layout,
  lifeBuoy: PhosphorIcons.Lifebuoy,
  link: PhosphorIcons.Link,
  linkedin: PhosphorIcons.LinkedinLogo,
  list: PhosphorIcons.List,
  logout: PhosphorIcons.SignOut,
  mail: PhosphorIcons.Envelope,
  mapPin: PhosphorIcons.MapPin,
  maximize: PhosphorIcons.CornersOut,
  megaphone: PhosphorIcons.Megaphone,
  menu: PhosphorIcons.List,
  messageCircle: PhosphorIcons.ChatCircle,
  messageSquare: PhosphorIcons.ChatTeardrop,
  minus: PhosphorIcons.Minus,
  monitor: PhosphorIcons.Monitor,
  moon: PhosphorIcons.Moon,
  moreVertical: PhosphorIcons.DotsThreeVertical,
  mousePointer: PhosphorIcons.Cursor,
  package: PhosphorIcons.Package,
  paperclip: PhosphorIcons.Paperclip,
  paperPlaneTilt: PhosphorIcons.PaperPlaneTilt,
  pause: PhosphorIcons.PauseCircle,
  percent: PhosphorIcons.Percent,
  phone: PhosphorIcons.Phone,
  pinterest: PhosphorIcons.PinterestLogo,
  pipeline: PhosphorIcons.Funnel,
  play: PhosphorIcons.PlayCircle,
  plus: PhosphorIcons.Plus,
  refreshCw: PhosphorIcons.ArrowsClockwise,
  save: PhosphorIcons.FloppyDisk,
  search: PhosphorIcons.MagnifyingGlass,
  segment: PhosphorIcons.TreeStructure,
  send: PhosphorIcons.PaperPlaneRight,
  settings: PhosphorIcons.Gear,
  share: PhosphorIcons.ShareNetwork,
  shoppingCart: PhosphorIcons.ShoppingCart,
  smile: PhosphorIcons.Smiley,
  social: PhosphorIcons.ShareNetwork,
  sort: PhosphorIcons.SortAscending,
  spacer: PhosphorIcons.ArrowsOutLineVertical,
  sparkles: PhosphorIcons.Sparkle,
  star: PhosphorIcons.Star,
  sun: PhosphorIcons.Sun,
  table: PhosphorIcons.Table,
  tablet: PhosphorIcons.Tablet,
  tag: PhosphorIcons.Tag,
  target: PhosphorIcons.Target,
  thumbsUp: PhosphorIcons.ThumbsUp,
  ticket: PhosphorIcons.Ticket,
  tiktok: PhosphorIcons.TiktokLogo,
  trash: PhosphorIcons.Trash,
  trendingUp: PhosphorIcons.TrendUp,
  trophy: PhosphorIcons.Trophy,
  twitter: PhosphorIcons.TwitterLogo,
  type: PhosphorIcons.TextT,
  upload: PhosphorIcons.UploadSimple,
  user: PhosphorIcons.User,
  userMinus: PhosphorIcons.UserMinus,
  userPlus: PhosphorIcons.UserPlus,
  users: PhosphorIcons.Users,
  userX: PhosphorIcons.UserMinus,
  video: PhosphorIcons.VideoCamera,
  warning: PhosphorIcons.Warning,
  webcam: PhosphorIcons.Webcam,
  website: PhosphorIcons.Globe,
  whatsapp: PhosphorIcons.WhatsappLogo,
  wifi: PhosphorIcons.WifiHigh,
  workflow: PhosphorIcons.GitMerge,
  x: PhosphorIcons.X,
  xCircle: PhosphorIcons.XCircle,
  youtube: PhosphorIcons.YoutubeLogo,
  zap: PhosphorIcons.Lightning,
};

export interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

const IconComponent: React.FC<IconProps> = ({
  name,
  className,
  size = 20,
  weight = 'regular',
  ...wrapperProps
}) => {
  const Component = iconMap[name];

  if (!Component) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return (
      <span className={cn("inline-flex items-center justify-center text-gray-400", className)} {...wrapperProps}>
        <PhosphorIcons.Info size={size} weight={weight} />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center justify-center", className)} {...wrapperProps}>
      <Component size={size} weight={weight} />
    </span>
  );
};

export const Icon = Object.assign(IconComponent, { icons: iconMap });
