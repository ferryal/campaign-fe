export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePasswordStrength(password: string): {
  isValid: boolean;
  strength: 'weak' | 'medium' | 'strong';
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters');
  } else {
    score++;
  }
  
  if (!/[A-Z]/.test(password)) {
    feedback.push('Add at least one uppercase letter');
  } else {
    score++;
  }
  
  if (!/[a-z]/.test(password)) {
    feedback.push('Add at least one lowercase letter');
  } else {
    score++;
  }
  
  if (!/[0-9]/.test(password)) {
    feedback.push('Add at least one number');
  } else {
    score++;
  }
  
  if (!/[^A-Za-z0-9]/.test(password)) {
    feedback.push('Add at least one special character');
  } else {
    score++;
  }
  
  const strengthMap = {
    0: 'weak',
    1: 'weak',
    2: 'weak',
    3: 'medium',
    4: 'medium',
    5: 'strong',
  } as const;
  
  return {
    isValid: score >= 4,
    strength: strengthMap[score as keyof typeof strengthMap],
    feedback,
  };
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleaned)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

export function isValidFileSize(file: File, maxSizeInMB: number): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
}

export function isValidFileType(
  file: File,
  allowedTypes: string[]
): boolean {
  return allowedTypes.includes(file.type);
}

export function isValidDateRange(startDate: Date, endDate: Date): boolean {
  return startDate < endDate;
}

export function isEmpty(value: unknown): boolean {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}
