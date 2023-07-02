function style(selector) {
    return e => {
        const el = e.target;
        if (el.hasAttribute(selector)) {
            const current = el.getAttribute('style');
            el.setAttribute('oldstyle', current);
            el.setAttribute('style', current + el.getAttribute(selector));
        }
    }
}

function unstyle(selector) {
    return e => {
        const el = e.target;
        if (el.hasAttribute(selector)) {
            const old = el.getAttribute('oldstyle')
            el.setAttribute('style', old);
        }
    }
}

document.addEventListener('mouseover', style('hover'));
document.addEventListener('mouseout', unstyle('hover'));
document.addEventListener('focusin', style('focus'));
document.addEventListener('focusout', unstyle('focus'));