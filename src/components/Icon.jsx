import {
  Camera,
  ChartLine,
  ClipboardList,
  MapPinned,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  Settings2,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  UtensilsCrossed,
} from 'lucide-react'

const registry = {
  Camera,
  ChartLine,
  ClipboardList,
  MapPinned,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  Settings2,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  UtensilsCrossed,
}

/** Renders a lucide icon by string name, falling back to a neutral glyph. */
export default function Icon({ name, ...props }) {
  const Glyph = registry[name] ?? Sparkles
  return <Glyph aria-hidden="true" {...props} />
}
