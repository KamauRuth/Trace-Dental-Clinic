create extension if not exists pgcrypto;

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  contact text not null,
  appointment_date date not null,
  service text not null,
  created_at timestamptz not null default now()
);

alter table if exists public.appointments
  add column if not exists service text not null default 'Consultation';

create table if not exists public.callback_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  created_at timestamptz not null default now()
);
