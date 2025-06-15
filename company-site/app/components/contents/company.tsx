'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: '会社概要',
    name: '社名',
    nameValue: 'AY合同会社',
    nameEn: '(EN: AY.LLC.)',
    representative: '代表社員',
    representativeValue: '綾部 英俊',
    established: '設立',
    establishedValue: '令和3年(2021年) 8月 4日',
    location: '所在地',
    locationValue: '東京都品川区旗の台1丁目11番9号',
    business: '事業内容',
    businessValue: 'シェアハウスの管理・運営およびソフトウェア受託開発',
  },
  en: {
    title: 'Company Profile',
    name: 'Company Name',
    nameValue: 'AY.LLC.',
    nameEn: '(JP: AY合同会社)',
    representative: 'Representative',
    representativeValue: 'Hidetoshi Ayabe',
    established: 'Established',
    establishedValue: 'August 4, 2021',
    location: 'Location',
    locationValue: '1-11-9 Hatanodai, Shinagawa-ku, Tokyo',
    business: 'Business',
    businessValue:
      'Management and operation of share houses and custom software development',
  },
}

export default function Company(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="company">{t.title}</HeadLine>
      <div className="mt-10 flex content-center flex-col w-3/4 mx-auto">
        <table className="table-fixed mt-4">
          <tbody>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white rounded-tl-2xl">
                {t.name}
              </th>
              <td className="border p-3">
                {t.nameValue}{' '}
                <span className="whitespace-nowrap">{t.nameEn}</span>
              </td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                {t.representative}
              </th>
              <td className="border p-3">{t.representativeValue}</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                {t.established}
              </th>
              <td className="border p-3">{t.establishedValue}</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                {t.location}
              </th>
              <td className="border p-3">{t.locationValue}</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                {t.business}
              </th>
              <td className="border p-3">{t.businessValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
