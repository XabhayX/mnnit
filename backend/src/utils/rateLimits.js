import rateLimit from 'express-rate-limit';

// Limit to 5 login attempts per 10 minutes
export const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10, // Limit each IP to 5 requests
  message: 'Too many login attempts. Please try again after 10 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});

export const topicLimiter = rateLimit({
  windowMs: 60 * 1000, // 10 minutes
  max: 4, // Limit each IP to 5 requests
  message: 'Too many upload attempts. Please try again after 10 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});