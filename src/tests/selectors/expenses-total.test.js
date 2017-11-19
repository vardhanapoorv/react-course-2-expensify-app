import selectexpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectexpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectexpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const res = selectexpensesTotal(expenses);
    expect(res).toBe(114195);
});
