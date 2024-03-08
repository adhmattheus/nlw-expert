export interface NoteCardProps {
  note: {
    id: string,
    date: Date
    content: string
  }
  onNoteDeleted: (id: string) => void
}