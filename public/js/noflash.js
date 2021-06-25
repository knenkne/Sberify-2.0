(function () {
    // Change these if you use something different in your hook.
    var storageKey = 'darkMode';
    var classNameDark = 'dark-mode';
    var classNameLight = 'light-mode';

    function setClassOnHtml(darkMode) {
        document.documentElement.classList.add(darkMode ? classNameDark : classNameLight);
        document.documentElement.classList.remove(darkMode ? classNameLight : classNameDark);
    }

    var localStorageTheme = null;
    try {
        localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {
        console.error(err);
    }

    var localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
        localStorageTheme = JSON.parse(localStorageTheme);
    }

    // Determine the source of truth
    if (localStorageExists) {
        // source of truth from localStorage
        setClassOnHtml(localStorageTheme);
    } else {
        // source of truth from document.documentElement
        var isDarkMode = document.documentElement.classList.contains(classNameDark);
        localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
})();
