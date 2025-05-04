'use client'

import { ReactElement } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Terms(): ReactElement {
  const { lang } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        {lang === 'ja' ? 'シェアハウス利用規約' : 'Share House Terms of Use'}
      </h1>

      {lang === 'ja' ? (
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. 基本事項</h2>
            <p className="mb-4">
              本物件はシェアハウスであり、キッチンや風呂場をはじめとして複数の入居者で共有するスペースが存在します。入居者はこれらのスペースを占有できず、かつ入居者数が一定数以上でなければ運営維持が困難となる性質があります。
            </p>
            <p className="mb-4">
              入居者は一般の賃貸物件とは異なる本性質を理解し、譲り合いの精神や当事者意識を持って規則を遵守することで、入居者が安心して生活できる環境を維持しなければなりません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. 禁止事項</h2>
            <p className="mb-2">以下の行為は原則として禁止されています：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>本物件及び周辺での喫煙</li>
              <li>コンロで火をつけたままその場から離れる行為</li>
              <li>
                本物件及び周辺で他の入居者や近隣の迷惑となる大声・音・振動を出す行為
              </li>
              <li>個人用スペース以外への私物やゴミの放置</li>
              <li>寝室に当たる部屋での飲食・火気の利用</li>
              <li>ペットの飼育</li>
              <li>入居者以外の宿泊</li>
              <li>自室以外の寝室へのみだりな立ち入り</li>
              <li>イベントスペースエリアへの許可のない立ち入り</li>
              <li>
                電力を大量消費する行為（サーバーの常時稼働、電動バイクの充電など）
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. 入居者の責任事項</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>貴重品・現金・私物の管理</li>
              <li>各個人宛の郵便物や宅配便の受取</li>
              <li>入居者同士や近隣とのトラブル解決</li>
              <li>建物内の清掃やゴミ出し</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. 運営への協力事項</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                運営からの連絡手段を常時チェックし、依頼へ速やかに対応すること
              </li>
              <li>
                最後に部屋や建物を出るときは照明やエアコンを切るなどの節電を行うこと
              </li>
              <li>設備や備品を大切に扱うこと</li>
              <li>
                確実な清掃やゴミ出しのため、当番などのルールを入居者同士で定めること
              </li>
              <li>
                夜23時〜翌朝7時は他の入居者の睡眠を妨げないよう静かにすること
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. 原状回復</h2>
            <p className="mb-4">
              退去時の原状回復については以下の原則に従います：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                入居者の故意・過失、善管注意義務違反による損耗等は入居者負担
              </li>
              <li>
                建物・設備等の自然的な劣化・損耗（経年変化）及び通常の使用による損耗は運営側負担
              </li>
              <li>震災等の不可抗力による損耗は入居者負担とはなりません</li>
            </ul>
          </section>
        </>
      ) : (
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Basic Terms</h2>
            <p className="mb-4">
              This property is a share house with common spaces such as kitchen
              and bathroom shared by multiple residents. Residents cannot
              exclusively occupy these spaces, and the operation requires a
              certain number of residents to maintain.
            </p>
            <p className="mb-4">
              Residents must understand this different nature from regular
              rental properties and follow the rules with a spirit of
              cooperation and awareness to maintain an environment where all
              residents can live comfortably.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              2. Prohibited Activities
            </h2>
            <p className="mb-2">
              The following activities are prohibited in principle:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Smoking in and around the property</li>
              <li>Leaving the stove unattended while in use</li>
              <li>
                Making loud noises or vibrations that disturb other residents or
                neighbors
              </li>
              <li>Leaving personal belongings or garbage in common areas</li>
              <li>Eating or using fire in bedrooms</li>
              <li>Keeping pets</li>
              <li>Allowing non-residents to stay overnight</li>
              <li>Entering other residents' bedrooms without permission</li>
              <li>Entering rental space areas without permission</li>
              <li>
                High power consumption activities (e.g., running servers,
                charging electric bikes)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              3. Resident Responsibilities
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Management of valuables, cash, and personal belongings</li>
              <li>Receiving personal mail and packages</li>
              <li>Resolving conflicts with other residents or neighbors</li>
              <li>Cleaning and garbage disposal within the building</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              4. Cooperation with Management
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Regularly check communication channels and respond promptly to
                requests
              </li>
              <li>
                Turn off lights and air conditioning when leaving rooms or the
                building last
              </li>
              <li>Handle facilities and equipment with care</li>
              <li>
                Establish cleaning and garbage disposal duty schedules among
                residents
              </li>
              <li>Maintain quiet hours from 11 PM to 7 AM</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              5. Property Restoration
            </h2>
            <p className="mb-4">
              The following principles apply to property restoration upon
              move-out:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Damage caused by resident's intentional acts or negligence will
                be charged to the resident
              </li>
              <li>
                Natural wear and tear of building and equipment is covered by
                management
              </li>
              <li>
                Damage caused by natural disasters or force majeure will not be
                charged to residents
              </li>
            </ul>
          </section>
        </>
      )}
    </div>
  )
}
