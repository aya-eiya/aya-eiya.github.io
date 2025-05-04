import { ReactElement, useEffect, useState } from 'react'

export type ImageModalProps = {
  images: string[]
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({
  images,
  alt,
  isOpen,
  onClose,
}: ImageModalProps): ReactElement | null {
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    setSelectedIndex(0)
  }, [images])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-gray-100 rounded-lg p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="aspect-video mb-4">
          <img
            src={images[selectedIndex]}
            alt={alt}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-24 aspect-video ${
                  index === selectedIndex ? 'ring-2 ring-brand-base' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
