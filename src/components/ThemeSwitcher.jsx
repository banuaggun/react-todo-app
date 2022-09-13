import { useState, useEffect } from 'react';

import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [hue, setHue] = useState('240')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [isColorPicking, setIsColorPicking] = useState(false)

  useEffect(() => {
   document.documentElement.setAttribute('color-scheme', theme);
   localStorage.setItem("theme", theme)
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--_hue', hue);
  }, [hue]);

  return(
    <aside className={styles.wrapper} style={{backgroundColor: isColorPicking ? 'hsl(var(--muted) / .6)' : 'transparent'}}>
      {isColorPicking ? (
        <>
        <button className={`btn ${styles.close}`} aria-label="Close color picking mode" onClick={() => setIsColorPicking(false)}>
          <XMarkIcon/>
        </button>
        <input type='range' className={styles.picker} min="0" max="360" aria-label='Change color theme picker' value={hue} onInput={(e) => setHue(e.target.value)} />
        </>
      ) : (
        <div className={styles.btns}>
          <button className='btn' aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`} role="switch"  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
          </button>
          <button className='btn' aria-label='Enable color picking mode' onClick={() => setIsColorPicking(true)}>
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  )
}


export default ThemeSwitcher