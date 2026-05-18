'use client'; // Hapus baris ini jika menggunakan React biasa (bukan Next.js App Router)

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SlideItem {
  id: number;
  imgPath: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const slides: SlideItem[] = [
  { id: 1, imgPath: '/images/leaf.png' },
  { id: 2, imgPath: '/images/leaf_2.png' },
  { id: 3, imgPath: '/images/leaf_3.png' },
  { id: 4, imgPath: '/images/leaf_4.png' },
];

// ─── Icon Components ──────────────────────────────────────────────────────────

function IconChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────

interface ArrowButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}

function ArrowButton({ direction, onClick, disabled }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === 'prev' ? 'Slide sebelumnya' : 'Slide berikutnya'
      }
      style={{
        position: 'absolute',
        top: '50%',
        [direction === 'prev' ? 'left' : 'right']: '12px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.45)',
        background: 'rgba(0,0,0,0.15)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        transition: 'background 0.2s, transform 0.2s, opacity 0.2s',
        padding: 0,
      }}
      // Hover effect via inline handler karena inline style tidak mendukung :hover
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.background =
            'rgba(0,0,0,0.3)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background =
          'rgba(0,0,0,0.15)';
      }}
    >
      {direction === 'prev' ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SwiperCustomNav() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => mainSwiper?.slidePrev();
  const handleNext = () => mainSwiper?.slideNext();

  return (
    <div>
      {/* Wrapper relatif agar tombol arrow bisa diposisikan absolut */}
      <div style={{ position: 'relative' }}>
        <Swiper
          modules={[Thumbs, Navigation]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          spaceBetween={16}
          slidesPerView={1}
          // Daftarkan instance ke ref agar bisa dikontrol manual
          onSwiper={(swiper) => {
            setMainSwiper(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          // Update state disabled tombol setiap kali slide berubah
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 600,
                  position: 'relative',
                }}
              >
                <img src={slide.imgPath} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Prev */}
        <ArrowButton
          direction="prev"
          onClick={handlePrev}
          disabled={isBeginning}
        />

        {/* Tombol Next */}
        <ArrowButton direction="next" onClick={handleNext} disabled={isEnd} />
      </div>

      <Swiper
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress // Wajib: agar Swiper utama bisa melacak slide aktif
        style={{ marginTop: 10 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                height: '100%',
                borderRadius: 8,
                overflow: 'hidden',
                opacity: activeIndex == index ? 1 : 0.45,
                border: activeIndex == index ? '2.5px solid #185FA5' : '',
                transition: 'opacity 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
            >
              <img src={slide.imgPath} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
