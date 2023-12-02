import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Company(): ReactElement {
  return (
    <>
      <HeadLine id="company">会社概要</HeadLine>
      <div className="mt-10 flex content-center flex-col w-3/4 mx-auto">
        <table className="table-fixed mt-4">
          <tbody>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white rounded-tl-2xl">
                社名
              </th>
              <td className="border p-3">
                AY合同会社{' '}
                <span className="whitespace-nowrap">(EN: AY.LLC.)</span>
              </td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                代表社員
              </th>
              <td className="border p-3">綾部 英俊</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                設立
              </th>
              <td className="border p-3">令和3年(2021年) 8月 4日</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                所在地
              </th>
              <td className="border p-3">東京都品川区旗の台1丁目11番9号</td>
            </tr>
            <tr>
              <th className="border w-32 p-3 font-normal bg-brand-dark text-white">
                事業内容
              </th>
              <td className="border p-3">
                シェアハウス / 民泊施設 の管理・運営
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
