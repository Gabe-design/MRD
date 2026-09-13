/**
 * The field styles shared by every form on the site.
 *
 * A plain module on purpose. These used to live in InquiryForm, which is a
 * client component, and importing a string out of a client module into a
 * server component hands you a client reference rather than the string.
 * Passed straight through as a prop that resolves on the client and looks
 * fine; interpolated into a template literal on the server it stringifies
 * the reference itself, and the textarea ends up with a className that is
 * the source code of a function that throws. Keeping them here means both
 * sides import the same plain strings.
 */
export const inputClasses =
  "w-full bg-ivory/5 border border-ivory/15 text-ivory placeholder-sand/50 px-4 py-3 text-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors";

export const selectClasses = `${inputClasses} appearance-none [&>option]:text-charcoal`;
