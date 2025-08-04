import { useState } from "react";
import { X, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface ClientRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClientRegistrationModal = ({ isOpen, onClose }: ClientRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+1",
    contactNumber: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    emergencyContactName: "",
    emergencyCountryCode: "+1",
    emergencyNumber: "",
    emergencyRelationship: "",
    salesRep: "",
    memberManager: "",
    trainer: "",
    attendanceId: "",
    clubId: "",
    gstNo: "",
    // Notification preferences
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: true,
    whatsappNotifications: true,
    mailerList: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle client registration logic here (will integrate with Supabase later)
    console.log("Client registration:", formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Client Registration</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card className="gym-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Contact Number *</Label>
                  <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      placeholder="Phone number"
                      required
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="gym-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContactName">Contact Name</Label>
                  <Input
                    id="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyRelationship">Relationship</Label>
                  <Input
                    id="emergencyRelationship"
                    value={formData.emergencyRelationship}
                    onChange={(e) => handleInputChange("emergencyRelationship", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Emergency Contact Number</Label>
                  <div className="flex gap-2">
                    <Select value={formData.emergencyCountryCode} onValueChange={(value) => handleInputChange("emergencyCountryCode", value)}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      value={formData.emergencyNumber}
                      onChange={(e) => handleInputChange("emergencyNumber", e.target.value)}
                      placeholder="Emergency contact number"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gym Information */}
          <Card className="gym-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Gym Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salesRep">Sales Representative</Label>
                  <Select value={formData.salesRep} onValueChange={(value) => handleInputChange("salesRep", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sales rep" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="jane">Jane Doe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memberManager">Member Manager</Label>
                  <Select value={formData.memberManager} onValueChange={(value) => handleInputChange("memberManager", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mike">Mike Johnson</SelectItem>
                      <SelectItem value="sarah">Sarah Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trainer">Assigned Trainer</Label>
                  <Select value={formData.trainer} onValueChange={(value) => handleInputChange("trainer", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trainer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alex">Alex Rodriguez</SelectItem>
                      <SelectItem value="lisa">Lisa Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendanceId">Attendance ID</Label>
                  <Input
                    id="attendanceId"
                    value={formData.attendanceId}
                    onChange={(e) => handleInputChange("attendanceId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clubId">Club ID</Label>
                  <Input
                    id="clubId"
                    value={formData.clubId}
                    onChange={(e) => handleInputChange("clubId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gstNo">GST Number</Label>
                  <Input
                    id="gstNo"
                    value={formData.gstNo}
                    onChange={(e) => handleInputChange("gstNo", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo Upload */}
          <Card className="gym-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Photo</h3>
              <div className="flex gap-4">
                <Button type="button" variant="outline" className="gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Photo
                </Button>
                <Button type="button" variant="outline" className="gap-2">
                  <Camera className="w-4 h-4" />
                  Capture Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="gym-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms">SMS Notifications</Label>
                  <Switch
                    id="sms"
                    checked={formData.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="email">Email Notifications</Label>
                  <Switch
                    id="email"
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="push">Push Notifications</Label>
                  <Switch
                    id="push"
                    checked={formData.pushNotifications}
                    onCheckedChange={(checked) => handleInputChange("pushNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Switch
                    id="whatsapp"
                    checked={formData.whatsappNotifications}
                    onCheckedChange={(checked) => handleInputChange("whatsappNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="mailer">Mailer List</Label>
                  <Switch
                    id="mailer"
                    checked={formData.mailerList}
                    onCheckedChange={(checked) => handleInputChange("mailerList", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Register Client
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientRegistrationModal;