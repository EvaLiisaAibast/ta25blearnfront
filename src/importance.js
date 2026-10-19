// Asja olulisuse tasemed: kõrge -> madal.
// rank määrab sorteerimise järjekorra (suurem = tähtsam),
// colorClass on Bulma värviklass (tag jaoks), rowClass värvib kogu nimekirja rea.
export const IMPORTANCE = {
    high: {
        label: 'Kõrge',
        rank: 3,
        colorClass: 'is-danger',
        rowClass: 'has-background-danger-light has-text-danger-dark',
    },
    medium: {
        label: 'Keskmine',
        rank: 2,
        colorClass: 'is-warning',
        rowClass: 'has-background-warning-light has-text-warning-dark',
    },
    low: {
        label: 'Madal',
        rank: 1,
        colorClass: 'is-success',
        rowClass: 'has-background-success-light has-text-success-dark',
    },
};

export const DEFAULT_IMPORTANCE = 'medium';

export function importanceInfo(key) {
    return IMPORTANCE[key] ?? {
        label: key ?? 'Tundmatu',
        rank: 0,
        colorClass: 'is-light',
        rowClass: 'has-background-light',
    };
}

// Sorteerib nimekirja olulisuse järgi: kõige olulisem ees.
// Võrdse olulisuse korral säilib algne järjekord (id järgi).
export function sortByImportance(items) {
    return [...items].sort(
        (a, b) => importanceInfo(b.importance).rank - importanceInfo(a.importance).rank || a.id - b.id,
    );
}
