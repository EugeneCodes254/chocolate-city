CREATE TABLE IF NOT EXISTS public.reservation_enquiries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME WITHOUT TIME ZONE NOT NULL,
    guests INTEGER NOT NULL CHECK (guests >= 1 AND guests <= 1000),
    location VARCHAR(120) NOT NULL,
    notes TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'confirmed', 'declined')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS reservation_enquiries_date_idx
ON public.reservation_enquiries (reservation_date);
