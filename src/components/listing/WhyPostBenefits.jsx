import { Sparkles, Users, ListChecks, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    description: 'Smart suggestions to craft compelling listings',
  },
  {
    icon: Users,
    title: 'Reach More Buyers',
    description: 'Access to thousands of verified buyers and tenants',
  },
  {
    icon: ListChecks,
    title: 'Easy Management',
    description: 'Track leads and manage all your listings in one place',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Leads',
    description: 'Get genuine inquiries from serious buyers only',
  },
]

export default function WhyPostBenefits() {
  return (
    <div className="mt-8">
      <h3 className="text-base font-semibold text-neutral-800 mb-4">
        Why Post With Us?
      </h3>

      <div className="space-y-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8F1FF] flex items-center justify-center shrink-0">
              <benefit.icon size={18} className="text-[#2558A6]" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700">{benefit.title}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Illustration placeholder */}
      <div className="mt-8 rounded-xl bg-gradient-to-br from-[#E8F1FF] to-[#F0EBFF] p-6 flex items-center justify-center min-h-[160px]">
        <div className="text-center">
          <div className="text-4xl mb-2">🏡</div>
          <p className="text-sm text-neutral-500">List smarter with AI</p>
        </div>
      </div>
    </div>
  )
}
