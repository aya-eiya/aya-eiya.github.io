import { ReactElement } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { texts } from '../house/texts'

type FacilityInfo = {
  name: string
  detail1: string
  detail2: string
  label: string
}

type OptionProps = {
  icon: ReactElement
  children: ReactElement | ReactElement[]
}

function Option({ icon, children }: OptionProps): ReactElement {
  return (
    <div className="bg-brand-base text-xs md:text-sm lg:text-base text-white rounded-lg py-2 flex flex-col items-center">
      <div className="h-6 md:h-10 rounded-md flex flex-col justify-center">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center">{icon}</div>
    </div>
  )
}

export function OptionList(): ReactElement {
  const { lang } = useLanguage()
  const facilities = texts[lang].facilities
  const facilityItems: [string, FacilityInfo][] = [
    ['station', facilities.station],
    ['laundry', facilities.laundry],
    ['dryer', facilities.dryer],
    ['kitchen', facilities.kitchen],
    ['bicycle', facilities.bicycle],
    ['internet', facilities.internet],
    ['bathroom', facilities.bathroom],
    ['sink', facilities.sink],
    ['bath', facilities.bath],
    ['floor', facilities.floor],
    ['livingroom', facilities.livingroom],
    ['share', facilities.share],
    ['lock', facilities.lock],
    ['storage', facilities.storage],
  ]

  return (
    <div className="grid gap-2 grid-cols-3 md:grid-cols-5 px-1 pb-2">
      {facilityItems.map(([img, facility], key) => (
        <Option
          key={key}
          icon={
            <>
              <p className="mb-2">
                <img
                  src={`/img/options/${img}.svg`}
                  alt={facility.name}
                  className="h-8 md:h-20"
                />
              </p>
              <p>{facility.detail1}</p>
              <p>{facility.detail2}</p>
            </>
          }
        >
          <>
            <p>{facility.label}</p>
          </>
        </Option>
      ))}
    </div>
  )
}
