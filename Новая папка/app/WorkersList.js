/**
 * 
 * @author ксюша
 * @name WorkersList
 * @rolesAllowed admin
 */
function WorkersList() {
    var self = this;
function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_SaveActionPerformed

function AddWorkerActionPerformed(evt) {//GEN-FIRST:event_AddWorkerActionPerformed
	// TODO Добавьте свой код:
         self.qWorkers.insert();
}//GEN-LAST:event_AddWorkerActionPerformed

function DeleteWorkerActionPerformed(evt) {//GEN-FIRST:event_DeleteWorkerActionPerformed
	// TODO Добавьте свой код:
       if (confirm("удалить?")) {
            self.qWorkers.deleteRow();
       }
}//GEN-LAST:event_DeleteWorkerActionPerformed

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	// TODO Добавьте свой код:
        self.model.params.Spec = "%" + self.textField.text + "%";
        self.model.qWorkers.requery();
}//GEN-LAST:event_SearchActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	  Logger.info(self.model.qWorkers);
          self.model.params.Spec = "%%"
          self.model.qWorkers.requery();
          Logger.info(self.model.qWorkers.requery());
 
}//GEN-LAST:event_formWindowOpened
}