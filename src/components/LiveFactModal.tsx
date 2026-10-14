'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, RefreshCw, Volume2, VolumeX, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../types/card';
import { sound, speakText, stopSpeaking } from '../utils/audio';

interface LiveFactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface LiveFactData {
  fact_en: string;
  fact_vi: string;
  imageUrl: string;
  source: string;
}

export const LiveFactModal: React.FC<LiveFactModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [data, setData] = useState<LiveFactData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speaking, setSpeaking] = useState(false);

  const isVi = language === 'vi';

  const fetchFact = async () => {
    setLoading(true);
    setError(null);
    stopSpeaking();
    setSpeaking(false);
    try {
      sound.playCardSlide();
      const res = await fetch(`/api/fact?lang=${language}`);
      const json = await res.json();
      if (!json.success) {
        throw new Error(json.error || 'Failed to fetch fact');
      }
      setData(json);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error loading fact');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !data) {
      fetchFact();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const currentFact = data ? (isVi ? data.fact_vi : data.fact_en) : '';

  const handleSpeak = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else if (currentFact) {
      setSpeaking(true);
      speakText(currentFact, language, () => setSpeaking(false));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-md bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-sm font-bold text-white">
              {isVi ? 'Fact Trực Tiếp Từ API' : 'Live API Fact Stream'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {loading ? (
            <div className="py-16 text-center space-y-3">
              <RefreshCw className="w-8 h-8 mx-auto text-amber-400 animate-spin" />
              <p className="text-sm text-slate-400">
                {isVi ? 'Đang kéo fact mới & tạo ảnh AI...' : 'Generating live fact & AI image...'}
              </p>
            </div>
          ) : error ? (
            <div className="py-8 text-center space-y-3">
              <p className="text-sm text-rose-400">{error}</p>
              <button
                type="button"
                onClick={fetchFact}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold hover:bg-slate-700"
              >
                {isVi ? 'Thử lại' : 'Retry'}
              </button>
            </div>
          ) : data ? (
            <>
              {/* Generated Image */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src={data.imageUrl}
                  alt={data.fact_en}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-amber-300 font-semibold border border-white/10">
                  AI Generated
                </div>
              </div>

              {/* Fact Text */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    {isVi ? 'Sự thật ngẫu nhiên' : 'Random Live Fact'}
                  </span>
                  <button
                    type="button"
                    onClick={handleSpeak}
                    className="flex items-center gap-1 text-xs text-slate-300 hover:text-white"
                  >
                    {speaking ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
                    <span>{speaking ? 'Stop' : 'Listen'}</span>
                  </button>
                </div>

                <p className="text-base font-medium text-slate-100 leading-relaxed">
                  {currentFact}
                </p>

                {isVi && data.fact_en !== data.fact_vi && (
                  <p className="text-xs text-slate-400 italic pt-1 border-t border-slate-800">
                    Gốc (EN): {data.fact_en}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                <span>Source: {data.source}</span>
                <span className="flex items-center gap-1 text-indigo-400">
                  Pollinations.ai + MyMemory <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </>
          ) : null}
        </div>

        {/* Footer Actions */}
        <div
          className="p-4 border-t border-slate-800/80 bg-slate-950/40 flex gap-2.5"
          style={{
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
          }}
        >
          <button
            type="button"
            onClick={fetchFact}
            disabled={loading}
            className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md shadow-indigo-600/20"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{isVi ? 'Rút Fact Mới Khác' : 'Draw Another Live Fact'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
