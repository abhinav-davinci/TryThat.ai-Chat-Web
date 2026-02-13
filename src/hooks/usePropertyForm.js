import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

const INITIAL_STATE = {
  listerType: '',
  title: '',
  description: '',
  propertyType: '',
  category: '',
  specifications: '',
  availableFor: '',
}

// Weight of each field for spotlight score (total = 100)
const FIELD_WEIGHTS = {
  listerType: 10,
  propertyType: 15,
  category: 15,
  specifications: 10,
  availableFor: 10,
  title: 20,
  description: 20,
}

export function usePropertyForm() {
  const [form, setForm] = useLocalStorage('listPropertyDraft', INITIAL_STATE)

  const updateField = useCallback((field, value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value }

      // Reset dependent fields
      if (field === 'propertyType') {
        next.category = ''
        next.specifications = ''
      }
      if (field === 'category') {
        next.specifications = ''
      }

      return next
    })
  }, [setForm])

  const resetForm = useCallback(() => {
    setForm(INITIAL_STATE)
  }, [setForm])

  const errors = useMemo(() => {
    const errs = {}
    if (!form.listerType) errs.listerType = 'Please select your lister type'
    if (!form.propertyType) errs.propertyType = 'Please select a property type'
    if (!form.category) errs.category = 'Please select a category'
    if (!form.availableFor) errs.availableFor = 'Please select availability'
    if (!form.title || form.title.trim().length < 5) errs.title = 'Please enter a catchy title (min 5 characters)'
    if (!form.description || form.description.trim().length < 20) errs.description = 'Please enter property highlights (min 20 characters)'
    return errs
  }, [form])

  const validateStep1 = useCallback(() => {
    return errors
  }, [errors])

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors])

  // Spotlight score: weighted field completeness
  const spotlightScore = useMemo(() => {
    let score = 0
    for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
      const val = form[field]
      if (!val) continue

      if (field === 'title') {
        const len = val.trim().length
        if (len >= 20) score += weight
        else if (len >= 10) score += weight * 0.7
        else if (len >= 5) score += weight * 0.4
      } else if (field === 'description') {
        const len = val.trim().length
        if (len >= 100) score += weight
        else if (len >= 50) score += weight * 0.7
        else if (len >= 20) score += weight * 0.4
      } else {
        score += weight
      }
    }
    return Math.round(score)
  }, [form])

  // AI context derived from form state
  const aiContext = useMemo(() => ({
    propertyType: form.propertyType,
    category: form.category,
    specifications: form.specifications,
    availableFor: form.availableFor,
    title: form.title,
  }), [form.propertyType, form.category, form.specifications, form.availableFor, form.title])

  return {
    form,
    updateField,
    resetForm,
    validateStep1,
    errors,
    isValid,
    spotlightScore,
    aiContext,
  }
}
