'use client'

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, ClipboardList, Bell, Calendar, MessageSquare, Brain, ArrowRight, Ghost } from "lucide-react"
import { UserButton, useUser } from "@clerk/nextjs"
import ClerkButtons from "@/components/ClerkButtons"

export default function LandingPage() {
	const { isSignedIn } = useUser()

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Ghost className="h-8 w-8" />
            <span className="text-xl font-bold">Ghosted</span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-sm hover:text-emerald-400 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm hover:text-emerald-400 transition-colors">
                How it works
              </Link>
            </nav>

			{isSignedIn ? (
					<div className="ml-3">
						<UserButton afterSignOutUrl="/" />
					</div>
				) : (
					<ClerkButtons />
				)}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-500 text-transparent bg-clip-text md:h-20">
            Never Get Ghosted Again
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Simplify your job hunt. Stay organized and ahead with Ghosted - your AI-powered job application tracking
            assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
				<Link href="/test/jobs" className="flex flex-row items-center">
              		Start now <ArrowRight className="ml-2 h-4 w-4" />
				</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything you need to land your dream job
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Briefcase className="h-6 w-6 text-emerald-500" />}
              title="Smart Job Tracking"
              description="Automatically organize and track all your job applications in one place."
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-emerald-500" />}
              title="AI-Powered Insights"
              description="Get personalized recommendations and interview preparation tips."
            />
            <FeatureCard
              icon={<Bell className="h-6 w-6 text-emerald-500" />}
              title="Smart Reminders"
              description="Never miss a deadline with intelligent follow-up reminders."
            />
            <FeatureCard
              icon={<ClipboardList className="h-6 w-6 text-emerald-500" />}
              title="Application Analytics"
              description="Track your success rates and identify improvement areas."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-emerald-500" />}
              title="Interview Management"
              description="Schedule and prepare for interviews with integrated calendar."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6 text-emerald-500" />}
              title="Network Management"
              description="Keep track of all your professional connections and interactions."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Design for lazy people like you and me</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Step
              number="1"
              title="Paste job link"
              description="Just paste the job posting URL and we'll automatically extract all the important details."
            />
            <Step
              number="2"
              title="Track progress"
              description="We'll organize everything and help you track each stage of your application."
            />
            <Step
              number="3"
              title="Land the job"
              description="Get insights and reminders to help you succeed in your job search."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-emerald-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your job search?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've already simplified their job hunt with Ghosted.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Get started for free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Ghost className="h-6 w-6" />
              <span className="font-bold">Ghosted</span>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Ghosted. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function Step({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

