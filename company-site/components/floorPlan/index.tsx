import { ReactElement } from 'react'
import { Room, RoomNames, Rooms } from '../../domains/house'

const defaultColor = '#FFFFFC'
const defaultWidth = 2
const unselectedColor = '#FFFFDC'
const selectedColor = '#DDF0FF'
const selectedWidth = 3

const defaultGProps = {
  stroke: 'black',
  fill: defaultColor,
  strokeWidth: defaultWidth,
}

export function FloorPlan({
  selected,
  setRoom,
}: {
  selected: Room
  setRoom: (room: Room) => void
}): ReactElement {
  const colors = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedColor : unselectedColor }),
    {} as Record<Room, string>
  )
  const strokeWidths = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedWidth : defaultWidth }),
    {} as Record<Room, number>
  )
  return (
    <div className="grid md:grid-cols-2">
      <div className="p2">
        <Floor1 colors={colors} strokeWidths={strokeWidths} setRoom={setRoom} />
        <p className="text-center">1F</p>
      </div>
      <div className="p2">
        <Floor2 colors={colors} strokeWidths={strokeWidths} setRoom={setRoom} />
        <p className="text-center">2F</p>
      </div>
    </div>
  )
}
function Floor1({
  colors,
  strokeWidths,
  setRoom,
}: {
  colors: Record<Room, string>
  strokeWidths: Record<Room, number>
  setRoom: (room: Room) => void
}): ReactElement {
  return (
    <>
      <svg className="w-full" viewBox="0,0,1480.0,1280.0">
        <g
          name="1F1"
          stroke="black"
          fill={colors.a}
          strokeWidth={strokeWidths.a}
          onClick={() => setRoom('a')}
        >
          <path d="M 2.0 2.0 h 455.0 v 273.0 h -455.0 v -273.0 z" />
          <path d="M 2.0 2.0 m 455.0 0.0 h 273.0 h 50.0 v 182.0 h -50.0 v 182.0 h -273.0 v -182.0 v -182.0 z" />
        </g>
        <g
          name="1F2"
          stroke="black"
          fill={colors.domi}
          strokeWidth={strokeWidths.domi}
          onClick={() => setRoom('domi')}
        >
          <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 50 0 h 405.0 h 70 v 182.0 v 60 h -70 v 122.0 h -405.0 h -50 v -182.0 h 50 v -182.0 z" />
        </g>
        <g name="1FB" {...defaultGProps}>
          <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 455.0 0 m 70 0 h 203.0 v 242.0 v 122.0 h -203.0 h -70 v -122.0 h 70 v -60 v -182.0 z" />
        </g>
        <g name="1FL" {...defaultGProps}>
          <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 h 420.0 v 546.0 h -420.0 v -546.0 z" />
        </g>
        <g name="1FDK" {...defaultGProps}>
          <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 m 420 0 h 581.0 v 546.0 h -191.0 v -256 h -390 v -290.0 z" />
        </g>
        <g name="1FENT" {...defaultGProps}>
          <path d="M 2.0 2.0 m 565.0 910.0 h 310 v -256 h 390 v 256 h 191 v 91.0 h -364 v 200 h -273 v -200 h -254 v -91.0 z" />
        </g>
        <g name="STR" {...defaultGProps}>
          <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
        </g>
        <g name="1FWC" {...defaultGProps}>
          <path d="M 2.0 2.0 m 1337.0 910.0 h 120 v 91 h -120 v -91 z" />
        </g>
        <g
          name="1F3"
          stroke="black"
          fill={colors.c}
          strokeWidth={strokeWidths.c}
          onClick={() => setRoom('c')}
        >
          <path d="M 2.0 2.0 m 182.0 910.0 h 273 h 110 v 91 h -50 h 50 h 254 v 273 h -637 v -273 v -91 z" />
        </g>
        <g
          name="1F4"
          stroke="black"
          fill={colors.b}
          strokeWidth={strokeWidths.b}
          onClick={() => setRoom('b')}
        >
          <path d="M 2.0 2.0 m 1092.0 1001.0 h 364 v 273 h -364 v -273 z" />
        </g>
        <g>
          <text x="80" y="180" fontSize="64" onClick={() => setRoom('a')}>
            {RoomNames.a}
          </text>
          <g onClick={() => setRoom('b')}>
            <text x="1200" y="1130" fontSize="35">
              {RoomNames.b}
            </text>
            <text x="1190" y="1180" fontSize="35">
              管理人室
            </text>
          </g>
          <text x="280" y="1120" fontSize="64" onClick={() => setRoom('c')}>
            {RoomNames.c}
          </text>
          <text x="860" y="180" fontSize="64" onClick={() => setRoom('domi')}>
            {RoomNames.domi}
          </text>
          <text x="480" y="160" fontSize="35" onClick={() => setRoom('c')}>
            サービスルーム
          </text>
          <text x="1300" y="80" fontSize="35">
            浴室
          </text>
          <text x="1300" y="190" fontSize="35">
            脱衣所
          </text>
          <text x="1300" y="240" fontSize="35">
            洗面所
          </text>
          <text x="1320" y="320" fontSize="35">
            W.C.
          </text>
          <text x="580" y="620" fontSize="35">
            リビング
          </text>
          <text x="1020" y="560" fontSize="35">
            ダイニング・キッチン
          </text>
          <text x="1040" y="768" fontSize="35">
            階段
          </text>
          <text x="1370" y="968" fontSize="35">
            W.C.
          </text>
          <text x="930" y="1168" fontSize="35">
            玄関
          </text>
        </g>
      </svg>
    </>
  )
}

function Floor2({
  colors,
  strokeWidths,
  setRoom,
}: {
  colors: Record<Room, string>
  strokeWidths: Record<Room, number>
  setRoom: (room: Room) => void
}): ReactElement {
  return (
    <>
      <svg className="w-full" viewBox="0,0,1480.0,1280.0">
        <g
          name="2F1"
          stroke="black"
          fill={colors.d}
          strokeWidth={strokeWidths.d}
          onClick={() => setRoom('d')}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 0 h 409.5 v 273.0 h -409.5 v -273.0 z" />
        </g>
        <g
          name="2F2"
          stroke="black"
          fill={colors.e}
          strokeWidth={strokeWidths.e}
          onClick={() => setRoom('e')}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 273 h 409.5 v 273.0 h -409.5 v -273.0 z" />
        </g>
        <g name="2FENT" {...defaultGProps}>
          <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 m 0 170 h 91 v 153.0 h 191 v 258 v 30 h 60 v 120 h -60 h -191 h -91 z" />
        </g>
        <g name="STR" {...defaultGProps}>
          <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
        </g>
        <g name="2FWRK" {...defaultGProps}>
          <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 h 91 h 500.5 v 546 h -309 v -223 h -191 v -153 h -91 z" />
        </g>
        <g name="2FLDK" {...defaultGProps}>
          <path d="M 2.0 2.0 m 0 546 m 224 330 h 659 v 185 h 60 h 191 v 179 h -910 z" />
        </g>
        <g name="2FWC" {...defaultGProps}>
          <path d="M 2.0 2.0 m 1134 1061 h 92 v 179 h -92 v -179 z" />
        </g>
        <g name="2FB" {...defaultGProps}>
          <path d="M 2.0 2.0 m 1166 876 h 60 h 182 v 364 h -182 v -179 v -120 h -60 z" />
        </g>
        <g>
          <text x="560" y="480" fontSize="64" onClick={() => setRoom('d')}>
            {RoomNames.d}
          </text>
          <text x="560" y="760" fontSize="64" onClick={() => setRoom('e')}>
            {RoomNames.e}
          </text>
          <text x="1040" y="768" fontSize="35">
            階段
          </text>
          <text x="420" y="1100" fontSize="35" onClick={() => setRoom('e')}>
            レンタルスペース
          </text>
          <text x="1120" y="520" fontSize="35" onClick={() => setRoom('e')}>
            シェアオフィス
          </text>
          <text x="1264" y="970" fontSize="35" onClick={() => setRoom('e')}>
            洗面所
          </text>
          <text x="1264" y="1040" fontSize="35" onClick={() => setRoom('e')}>
            脱衣所
          </text>
          <text x="1264" y="1160" fontSize="35" onClick={() => setRoom('e')}>
            風呂場
          </text>
          <text x="1150" y="1160" fontSize="35" onClick={() => setRoom('e')}>
            W.C.
          </text>
        </g>
      </svg>
    </>
  )
}
