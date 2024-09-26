'use client'
import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import PlannerApp from '@/components/PlannerApp'
import { Button } from "@/components/ui/button"
import { FaArrowRight, FaPlane, FaHeart, FaUsers, FaCalendar, FaMapPin } from 'react-icons/fa'
import Image from 'next/image'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'travel' | 'date'>('travel')
  const [showPlanner, setShowPlanner] = useState(false)
  // const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {!showPlanner ? (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">TravelDate</h1>
              <div className="space-x-4">
                <Button variant="ghost" onClick={() => setShowPlanner(true)}>プランを作成</Button>
                <Button onClick={() => setShowPlanner(true)}>無料で始める</Button>
              </div>
            </nav>
          </header>

          <main>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="美しい風景"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  素敵な思い出を、カンタンに
                </h2>
                <p className="text-xl sm:text-2xl mb-8">
                  旅行もデートも、TravelDateで完璧なプランを
                </p>
                <Button size="lg" onClick={() => setShowPlanner(true)}>
                  無料でプランを作成 <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </section>

            <section className="py-20 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">TravelDateの特徴</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <FaCalendar className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2 text-center">簡単スケジューリング</h3>
                    <p className="text-gray-600 text-center">直感的なインターフェースで、プランを簡単に作成できます。</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <FaMapPin className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                    <h3 className="text-xl font-semibold mb-2 text-center">場所のおすすめ</h3>
                    <p className="text-gray-600 text-center">人気スポットや穴場情報を豊富にご提案します。</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <FaUsers className="w-12 h-12 mx-auto mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-2 text-center">共有機能</h3>
                    <p className="text-gray-600 text-center">作成したプランを簡単に友達や恋人と共有できます。</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container mx-auto container-padding">
                <h2 className="text-3xl font-bold text-center mb-12">思い出の瞬間</h2>
                <ImageSlider />
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">プランの種類</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <FaPlane className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-4 text-center">旅行プラン</h3>
                    <p className="text-gray-700 mb-6 text-center">新しい場所、新しい冒険。あなたの旅をサポートします。</p>
                    <Button onClick={() => {setShowPlanner(true); setActiveTab('travel')}} className="w-full">
                      旅行プランを作成 <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                  <div className="bg-pink-100 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <FaHeart className="w-16 h-16 mx-auto mb-4 text-pink-600" />
                    <h3 className="text-2xl font-bold mb-4 text-center">デートプラン</h3>
                    <p className="text-gray-700 mb-6 text-center">特別な時間を、もっと特別に。素敵なデートをお手伝い。</p>
                    <Button onClick={() => {setShowPlanner(true); setActiveTab('date')}} className="w-full">
                      デートプランを作成 <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">ユーザーの声</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "田中さん", comment: "旅行の計画が苦手でしたが、TravelDateのおかげで素晴らしい旅ができました！" },
                    { name: "佐藤さん", comment: "デートプランを立てるのが楽しくなりました。彼女も大喜びです。" },
                    { name: "鈴木さん", comment: "友達との旅行も、TravelDateで簡単に計画できて便利です。" }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                      <p className="font-semibold text-right">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-blue-600 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">素敵な思い出作りを始めましょう</h2>
                <p className="text-xl mb-8">TravelDateで、あなたの特別な瞬間をデザインしませんか？</p>
                <Button size="lg" variant="secondary" onClick={() => setShowPlanner(true)}>
                  無料でプランを作成 <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </section>
          </main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4">TravelDate</h3>
                  <p>素敵な思い出作りをサポートします。</p>
                </div>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <h4 className="text-lg font-semibold mb-4">リンク</h4>
                  <ul>
                    <li><a href="#" className="hover:text-blue-400">ホーム</a></li>
                    <li><a href="#" className="hover:text-blue-400">旅行プラン</a></li>
                    <li><a href="#" className="hover:text-blue-400">デートプラン</a></li>
                    <li><a href="#" className="hover:text-blue-400">お問い合わせ</a></li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3">
                  <h4 className="text-lg font-semibold mb-4">フォローする</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400">Twitter</a>
                    <a href="#" className="hover:text-blue-400">Facebook</a>
                    <a href="#" className="hover:text-blue-400">Instagram</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>&copy; 2023 TravelDate. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <div className="container mx-auto px-4 py-20">
          <Button onClick={() => setShowPlanner(false)} className="mb-6">
            ← トップページに戻る
          </Button>
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as 'travel' | 'date')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="travel">旅行</TabsTrigger>
              <TabsTrigger value="date">デート</TabsTrigger>
            </TabsList>
            <TabsContent value="travel">
              {/* <PlannerApp type="travel" activeTab={activeTab} /> */}
            </TabsContent>
            <TabsContent value="date">
              {/* <PlannerApp type="date" activeTab={activeTab} /> */}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}