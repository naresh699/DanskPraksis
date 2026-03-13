'use client';

import { useState, useCallback } from 'react';

export default function SpeechButton({ text, lang = 'da-DK', size = 'normal' }) {
    const [playing, setPlaying] = useState(false);

    const speak = useCallback(() => {
        if (typeof window === 'undefined' || !window.speechSynthesis) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.65;
        utterance.pitch = 1;

        // Try to find a Danish voice
        const voices = window.speechSynthesis.getVoices();
        const daVoice = voices.find(v => v.lang.startsWith('da'));
        if (daVoice) {
            utterance.voice = daVoice;
        }

        utterance.onstart = () => setPlaying(true);
        utterance.onend = () => setPlaying(false);
        utterance.onerror = () => setPlaying(false);

        window.speechSynthesis.speak(utterance);
    }, [text, lang]);

    const className = `speech-btn ${playing ? 'playing' : ''} ${size === 'small' ? 'speech-btn-sm' : ''}`;

    return (
        <button
            className={className}
            onClick={speak}
            title={`Listen: "${text}"`}
            aria-label={`Listen to: ${text}`}
        >
            {playing ? '🔊' : '🔈'}
        </button>
    );
}
