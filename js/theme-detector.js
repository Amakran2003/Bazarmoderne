// Détecter le mode de couleur préféré et réagir aux changements
(function() {
    // Appliquer immédiatement pour éviter le flash
    applySystemTheme();
    
    // Détecteur de mode sombre
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function that handles theme changes - avoid template literals in CSS
    function handleDarkModeChange(e) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
    
    // Function to apply system theme if no saved theme exists
    function applySystemTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(isDark ? 'dark' : 'light');
        }
    }
    
    // Core function to apply theme - don't use template literals for CSS variables
    function applyTheme(theme) {
        const html = document.documentElement;
        
        // Remove both possible classes
        html.classList.remove('dark', 'light');
        
        // Add the appropriate class
        html.classList.add(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.style.colorScheme = theme;
        
        // Update theme-color meta tag
        const metaThemeColor = document.getElementById('theme-color');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#ffffff');
        }
        
        // Dispatch custom event for React to detect
        const themeChangeEvent = new CustomEvent('themeChanged', { 
            detail: { theme: theme } 
        });
        document.dispatchEvent(themeChangeEvent);
        
        console.log(`Thème appliqué: ${theme}`);
    }
    
    // Use addEventListener for modern browsers
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    
    // Compatibility for older Safari which uses deprecated .addListener
    if (typeof darkModeMediaQuery.addListener === 'function') {
        darkModeMediaQuery.addListener(handleDarkModeChange);
    }
    
    // Vérifier s'il y a un thème enregistré au chargement
    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            // Appliquer selon les préférences système
            handleDarkModeChange(darkModeMediaQuery);
        }
    });
    
    // Écouter les changements de thème provenant de React
    document.addEventListener('reactThemeChange', function(e) {
        if (e.detail && (e.detail.theme === 'dark' || e.detail.theme === 'light')) {
            applyTheme(e.detail.theme);
        }
    });
    
    // Expose applyTheme to window for global access
    window.applyTheme = applyTheme;
})();
