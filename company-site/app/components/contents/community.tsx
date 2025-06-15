'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'
import { staticFiles, fileDetails } from '../../domains/staticFiles'
import Link from 'next/link'

const images = staticFiles
  .filter((path) => path.startsWith('img/communities'))
  .filter(
    (path) =>
      fileDetails[path].type === 'png' &&
      fileDetails[path].dimensions.width > 600
  )
  .map((path) => `${path}`)

const discordQRImages = {
  small: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/s')
  ),
  medium: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/m')
  ),
  large: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/l')
  ),
}

const texts = {
  ja: {
    title: 'コミュニティ',
    internationalExchange: {
      title: '国際交流',
      description:
        '旗の台シェアハウスでは、様々な国籍のメンバーが共に生活しています。文化交流イベントやランゲージエクスチェンジを定期的に開催し、グローバルな視点と相互理解を深める機会を提供しています。',
    },
    businessMatching: {
      title: 'ビジネスマッチング',
      description:
        'メンバー間のスキルや経験を活かしたビジネスマッチングを促進しています。IT、デザイン、マーケティング、語学など、様々な分野のプロフェッショナルが集まる環境で、新しいビジネスチャンスを見つけることができます。',
    },
    networking: {
      title: 'ネットワーキング',
      description:
        '定期的なイベントやミートアップを通じて、メンバー同士の交流を深めています。共有スペースでの自然な出会いから、新しいプロジェクトや協力関係が生まれています。',
    },
    sns: {
      title: 'コミュニティSNS',
      discord: {
        title: 'Discord',
        description:
          'コミュニティメンバー同士の交流やイベント情報の共有にDiscordを使用しています。以下のQRコードまたはリンクからご参加ください。',
      },
    },
  },
  en: {
    title: 'Community',
    internationalExchange: {
      title: 'International Exchange',
      description:
        'At Hatanodai Share House, members from various nationalities live together. We regularly organize cultural exchange events and language exchange sessions, providing opportunities to deepen global perspectives and mutual understanding.',
    },
    businessMatching: {
      title: 'Business Matching',
      description:
        'We promote business matching leveraging the skills and experiences of our members. In an environment where professionals from various fields such as IT, design, marketing, and languages gather, you can find new business opportunities.',
    },
    networking: {
      title: 'Networking',
      description:
        'We deepen connections between members through regular events and meetups. New projects and collaborations arise naturally from encounters in shared spaces.',
    },
    sns: {
      title: 'Community SNS',
      discord: {
        title: 'Discord',
        description:
          'We use Discord for community member interactions and event information sharing. Please join using the QR code or link below.',
      },
    },
  },
}

export default function Community(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="community">{t.title}</HeadLine>
      <div className="mt-10 mx-2">
        <section>
          <div className="mx-2">
            <div className="mb-4 flex flex-col gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src={`/${image}`}
                    alt={`Community Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mb-4 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t.internationalExchange.title}
                </h2>
                <p className="mb-4">{t.internationalExchange.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t.businessMatching.title}
                </h2>
                <p className="mb-4">{t.businessMatching.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {t.networking.title}
                </h2>
                <p className="mb-4">{t.networking.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{t.sns.title}</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {t.sns.discord.title}
                  </h3>
                  <p className="mb-4">{t.sns.discord.description}</p>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div>
                      {discordQRImages.small && (
                        <img
                          src={`/${discordQRImages.small}`}
                          alt="Discord QR Code"
                          className="w-32 h-32 block sm:hidden"
                        />
                      )}
                      {discordQRImages.medium && (
                        <img
                          src={`/${discordQRImages.medium}`}
                          alt="Discord QR Code"
                          className="w-40 h-40 hidden sm:block md:hidden"
                        />
                      )}
                      {discordQRImages.large && (
                        <img
                          src={`/${discordQRImages.large}`}
                          alt="Discord QR Code"
                          className="w-48 h-48 hidden md:block"
                        />
                      )}
                    </div>
                    <Link
                      href="https://discord.gg/your-invite-link"
                      target="_blank"
                      className="text-brand-base hover:text-brand-bright inline-flex items-center"
                    >
                      Discord
                      <span
                        title="外部リンク"
                        className="inline-block align-sub bg-[url(/img/icons/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
