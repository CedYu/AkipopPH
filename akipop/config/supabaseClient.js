import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ivwbccbizsdvefobkowz.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2d2JjY2JpenNkdmVmb2Jrb3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3MjQxMDQsImV4cCI6MTk4MzMwMDEwNH0.xtPvlkwaPT5KpTCD_TZYp1qfX1dAbzgPOfKdqmlgGsI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase