export function detectDevice() {
    const isMobile = window.matchMedia; // Определение устройства по методу ввода
    if (!isMobile) return false;

    const device = isMobile('(pointer:coarse)');
    return device.matches;
}
