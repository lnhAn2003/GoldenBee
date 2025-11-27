export type Partner = {
  name: string
  url: string
  logo: string
  tier: "featured" | "core" | "international"
  tag?: string
  country?: string
}

export const partners: Partner[] = [
  { name: "Careem", url: "https://www.careem.com", logo: "https://logo.clearbit.com/careem.com", tier: "featured", tag: "Mobility" },
  { name: "Daraz", url: "https://www.daraz.pk", logo: "https://logo.clearbit.com/daraz.pk", tier: "featured", tag: "Marketplace" },
  { name: "Easypaisa", url: "https://easypaisa.com.pk", logo: "https://logo.clearbit.com/easypaisa.com.pk", tier: "featured", tag: "Payments" },
  { name: "Foodpanda", url: "https://www.foodpanda.com", logo: "https://logo.clearbit.com/foodpanda.com", tier: "featured", tag: "Delivery" },
  { name: "OneLoad", url: "https://oneloadpk.com", logo: "https://logo.clearbit.com/oneloadpk.com", tier: "core", tag: "Top-up" },
  { name: "1LINK", url: "https://1link.net.pk", logo: "https://logo.clearbit.com/1link.net.pk", tier: "core", tag: "Switch" },
  { name: "NayaPay", url: "https://www.nayapay.com", logo: "https://logo.clearbit.com/nayapay.com", tier: "core", tag: "Wallet" },
  { name: "Finja", url: "https://finja.pk", logo: "https://logo.clearbit.com/finja.pk", tier: "core", tag: "SME" },
  { name: "Foree", url: "https://foree.com", logo: "https://logo.clearbit.com/foree.com", tier: "core", tag: "Pay" },
  { name: "FonePay", url: "https://www.fonepay.com", logo: "https://logo.clearbit.com/fonepay.com", tier: "core", tag: "QR" },
  { name: "Bookme", url: "https://bookme.pk", logo: "https://logo.clearbit.com/bookme.pk", tier: "core", tag: "Tickets" },
  { name: "GrocerApp", url: "https://grocerapp.pk", logo: "https://logo.clearbit.com/grocerapp.pk", tier: "core", tag: "Grocery" },
  { name: "Cheetay", url: "https://www.cheetay.pk", logo: "https://logo.clearbit.com/cheetay.pk", tier: "core", tag: "Last mile" },
  { name: "E.Ocean", url: "https://www.eocean.com", logo: "https://logo.clearbit.com/eocean.com", tier: "core", tag: "Communications" },
  { name: "PayPlus", url: "https://payplus.com.pk", logo: "https://logo.clearbit.com/payplus.com.pk", tier: "core", tag: "Fintech" },
  { name: "Konnect by HBL", url: "https://www.hbl.com/konnect", logo: "https://logo.clearbit.com/hbl.com", tier: "core", tag: "Banking" },
  { name: "ding", url: "https://www.ding.com", logo: "https://logo.clearbit.com/ding.com", tier: "international", country: "IE" },
  { name: "DT One", url: "https://www.dtone.com", logo: "https://logo.clearbit.com/dtone.com", tier: "international", country: "SG" },
  { name: "Prepay Nation", url: "https://www.prepaynation.com", logo: "https://logo.clearbit.com/prepaynation.com", tier: "international", country: "US" },
  { name: "Tranglo", url: "https://www.tranglo.com", logo: "https://logo.clearbit.com/tranglo.com", tier: "international", country: "MY" },
]

