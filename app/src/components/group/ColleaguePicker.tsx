import { useState } from 'react';
import { EmptyState, ErrorState, LoadingState } from '@/components/feedback';
import { Avatar } from '@/components/ui/Avatar';
import { useAsync } from '@/hooks/useAsync';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { getColleagueErrorMessage, searchColleagues } from '@/services/colleagueService';
import type { Colleague } from '@/types';
import styles from './ColleaguePicker.module.css';

type ColleaguePickerProps = {
  selected: Colleague[];
  onChange: (selected: Colleague[]) => void;
  /** Pessoas que não podem ser escolhidas (ex.: já estão no grupo). */
  excludeIds?: ReadonlySet<string>;
  /** Quantas pessoas ainda cabem. */
  maxSelectable: number;
};

/** Busca de colaboradores com seleção múltipla (escolhidos aparecem como "pílulas" no topo). */
export function ColleaguePicker({ selected, onChange, excludeIds, maxSelectable }: ColleaguePickerProps) {
  const [text, setText] = useState('');
  const term = useDebouncedValue(text).trim();
  const { data, error, isLoading, reload } = useAsync(() => searchColleagues(term), [term]);
  const selectedIds = new Set(selected.map((person) => person.userId));
  const isFull = selected.length >= maxSelectable;
  const people = (data ?? []).filter((person) => !excludeIds?.has(person.userId));

  function toggle(person: Colleague) {
    if (selectedIds.has(person.userId)) onChange(selected.filter((p) => p.userId !== person.userId));
    else if (!isFull) onChange([.ֻǱ˞