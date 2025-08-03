import { LayoutDashboard, Plus, Users, Landmark, Image, Calendar } from "lucide-react";

export const dashboardRoutes = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "ড্যাশবোর্ড",
  },
  {
    href: "/dashboard/gallery",
    icon: Image,
    label: "গ্যালারি",
  },
  {
    href: "/dashboard/tourist-places",
    icon: Landmark,
    label: "দর্শনীয় স্থানসমূহ",
  },
  {
    href: "/dashboard/tourist-places/create-place",
    icon: Plus,
    label: "নতুন স্থান যোগ করুন",
  },
  {
    href: "/dashboard/events",
    icon: Calendar,
    label: "ইভেন্ট",
  },
];
